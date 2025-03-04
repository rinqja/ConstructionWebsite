import React, { useState } from "react";
import "./BewerbungModal.scss";
import ModalClose from "../../../assets/icons/modal-close.svg";
import RightIcon from "../../../assets/icons/right-sm.svg";
import UploadIcon from "../../../assets/icons/upload-icons.svg";
import { ApiPost, formDataHeader, ApiPost1 } from "../../../API/ApiData";
import { toast } from "react-hot-toast";
import Loader from "../../Loader";

export default function BewerbungModal(props) {
  const { isShowModal, setIsShowModal } = props;
  const [loader, setLoader] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salary_expected: "",
    options: [],
    photo: null,
  });

  const handleFormDetails = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  const handleCheckBoxDetails = (e) => {
    setFormData((prevData) => {
      if (e.target.checked) {
        // Add the checkbox value to the array
        return {
          ...prevData,
          options: [...prevData.options, e.target.name],
        };
      } else {
        // Remove the checkbox value from the array
        return {
          ...prevData,
          options: prevData.options.filter((item) => item !== e.target.name),
        };
      }
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
    setFormErrors({ ...formErrors, photo: "" });
  };
  const handleFormData = async () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name ist erforderlich.";
    }
    if (!formData.email) {
      errors.email = "E-Mail ist erforderlich.";
    }
    if (!formData.phone) {
      errors.phone = "Telefonnummer ist erforderlich.";
    }
    if (!formData.salary_expected) {
      errors.salary_expected = "Gehaltsvorstellung ist erforderlich.";
    }
    if (!formData.photo) {
      errors.photo = "Bewerbungsunterlagen ist erforderlich.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setLoader(true);
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("salary_expected", formData.salary_expected);
      formData.options.forEach((item, index) => {
        payload.append(`options[${index}]`, item);
      });
      payload.append("photo", formData.photo);
      payload.append("project", "Berufskraftfahrer");

      try {
        // First API call to submit the application
        const applicationResponse = await ApiPost("/application", payload, formDataHeader);
        console.log("application_res_", applicationResponse);
        if (applicationResponse.status === 200) {
          toast.success("Application Submitted Successfully");

          // Prepare payload for the second API call
          const emailPayload = {
            subject: "Neue Bewerbung Lübber Webseite",

            text: "ihr habt eine neue Bewerbung in euerm System.",

          };

          // Second API call to send email using ApiPost1
          const emailResponse = await ApiPost1("/success/send", emailPayload, formDataHeader);
          console.log("email_res_", emailResponse);
          if (emailResponse.status === 200) {
            toast.success("Email Sent Successfully");
          } else {
            throw new Error("Failed to send email");
          }
        } else {
          throw new Error("Failed to submit application");
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("An error occurred: " + error.message);
      } finally {
        setLoader(false);
        // Reset form data and close modal upon all actions complete
        setFormData({
          name: "",
          email: "",
          phone: "",
          salary_expected: "",
          options: [],
          photo: null,
        });
        setIsShowModal(false);
      }
    }
  };


  return (
    <div>
      <div className="bewerbung-modal-wrapper">
        <div className="modal">
          <div className="icon-right" onClick={() => setIsShowModal(false)}>
            <img src={ModalClose} alt="ModalClose" />
          </div>
          <h4>Bewerbung schreiben</h4>
          <div className="box">
            <div className="input">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={(e) => handleFormDetails(e)}
              />
              {formErrors.name && (
                <span className="error-message">{formErrors.name}</span>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="E-Mail"
                name="email"
                value={formData.email}
                onChange={(e) => handleFormDetails(e)}
              />
              {formErrors.email && (
                <span className="error-message">{formErrors.email}</span>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Telefonnummer"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleFormDetails(e)}
              />
              {formErrors.phone && (
                <span className="error-message">{formErrors.phone}</span>
              )}
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Gehaltsvorstellung"
                name="salary_expected"
                value={formData.salary_expected}
                onChange={(e) => handleFormDetails(e)}
              />
              {formErrors.salary_expected && (
                <span className="error-message">
                  {formErrors.salary_expected}
                </span>
              )}
            </div>
            <div className="checkbox-text">
              <input
                type="checkbox"
                name="Abrollcontainer"
                value="Abrollcontainer"
                onChange={(e) => handleCheckBoxDetails(e)}
              />
              <label>Abrollcontainer</label>
            </div>
            <div className="checkbox-text">
              <input
                type="checkbox"
                name="Absetzcontainer"
                value="Absetzcontainer"
                onChange={(e) => handleCheckBoxDetails(e)}
              />
              <label>Absetzcontainer</label>
            </div>
            <div className="checkbox-text">
              <input
                type="checkbox"
                name="Dreiachser"
                value="Dreiachser"
                onChange={(e) => handleCheckBoxDetails(e)}
              />
              <label>Dreiachser</label>
            </div>
            <div className="checkbox-text">
              <input
                type="checkbox"
                name="Sattelzug"
                value="Sattelzug"
                onChange={(e) => handleCheckBoxDetails(e)}
              />
              <label>Sattelzug</label>
            </div>
            {/* <div className="input">
              <input
                type="file"
                placeholder="Bewerbungsunterlagen"
                name="photo"
                onChange={(e) => handlePhotoUpload(e)}
              />
              {formErrors.photo && <span className="error-message">{formErrors.photo}</span>}
            </div> */}
            <div>
              <div className="input-design-box">
                <input
                  type="file"
                  placeholder="Bewerbungsunterlagen"
                  name="photo"
                  onChange={(e) => handlePhotoUpload(e)}
                />
                {formData.photo ? (
                  <>
                    <p>{formData.photo?.name}</p>
                  </>
                ) : (
                  <>
                    <p>Bewerbungsunterlagen</p>
                    <img src={UploadIcon} alt="UploadIcon" />
                  </>
                )}
              </div>
              {formErrors.photo && (
                <span className="error-message">{formErrors.photo}</span>
              )}
            </div>
            <div className="icon-text" onClick={() => handleFormData()}>
              <span>Senden</span>
              {loader ? <Loader /> : <img src={RightIcon} alt="RightIcon" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
