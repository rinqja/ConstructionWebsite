import React, { useState } from "react";
import "./Footer.scss";
import RightIcon from "../../assets/icons/black-right.svg";
import FooterNewIcon from "../../assets/logo/footer-new-icon.svg";
import { NavLink } from "react-router-dom";
import { ApiPost, ApiPost1 } from "../../API/ApiData";
import { toast } from "react-hot-toast";
import Loader from "../../routes/Loader";

export default function Footer() {
  const [footFormField, setFootFormField] = useState({
    name: "",
    emailAddress: "",
    telephone: "",
    news: "",
  });
  const [loader, setLoader] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleFieldData = (e) => {
    setFootFormField({ ...footFormField, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };
  const handleFooterForm = async () => {
    let errors = {};

    // Validate input fields
    if (!footFormField.name) {
      errors.name = "Name ist erforderlich.";
    }
    if (!footFormField.emailAddress) {
      errors.emailAddress = "E-Mail Adresse ist erforderlich.";
    }
    if (!footFormField.telephone) {
      errors.telephone = "Telefon ist erforderlich.";
    }
    if (!footFormField.news) {
      errors.news = "Nachricht ist erforderlich.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setLoader(true);
      const payload = {
        name: footFormField?.name,
        email: footFormField.emailAddress,
        phone: footFormField.telephone,
        news: footFormField.news,
      };
      const emailPayload = {
        subject: 'Neue Kontaktanfrage Lübber Webseite',
        text: 'ihr habt eine neue Kontaktanfrage in euerm System.',

      };
      await ApiPost("/message", payload)
        .then((res) => {
          console.log("Message_Res_", res);
          if (res.data.status === 200) {
            toast.success("Submitted Successfully to first endpoint");
          }
        })
        .catch((error) => {
          console.log("Error", error);
          toast.error(error);
        });

      // New API call
      await ApiPost1("/success/send", emailPayload)
        .then((res) => {
          console.log("Message_Res_", res);
          if (res.data.status === 200) {
            toast.success("Submitted Successfully to second endpoint");
          }
        })
        .catch((error) => {
          console.log("Error", error);
          toast.error(error);
        });

      setLoader(false);
      setFootFormField({
        name: "",
        emailAddress: "",
        telephone: "",
        news: "",
      });
    }
  };

  return (
    <div>
      <footer>
        <div className="container-md">
          <div className="footer-grid" id="footer-grid">
            <div className="footer-grid-items">
              <h5>Lübber Erd- und Tiefbau GmbH</h5>
              <div className="new-grid">
                <div className="new-grid-items">
                  <img src={FooterNewIcon} alt="FooterNewIcon" />
                </div>
                <div className="new-grid-items">
                  <span>Bassumer</span>
                  <span>Landstraße 60</span>
                  <span>28857 Syke</span>
                  <span>(04242) 5 06 96</span>
                </div>
              </div>
            </div>
            <div className="footer-grid-items">
              <h6>Ihre Nachricht an uns:</h6>
              <div className="all-input">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={footFormField.name}
                    onChange={(e) => handleFieldData(e)}
                  />
                  {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="E-Mail Adresse"
                    name="emailAddress"
                    value={footFormField.emailAddress}
                    onChange={(e) => handleFieldData(e)}
                  />
                  {formErrors.emailAddress && <span className="error-message">{formErrors.emailAddress}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Telefon"
                    name="telephone"
                    value={footFormField.telephone}
                    onChange={(e) => handleFieldData(e)}
                  />
                  {formErrors.telephone && <span className="error-message">{formErrors.telephone}</span>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Nachricht"
                    name="news"
                    value={footFormField.news}
                    onChange={(e) => handleFieldData(e)}
                  />
                  {formErrors.news && <span className="error-message">{formErrors.news}</span>}
                </div>
              </div>
              <div className="button-right" onClick={() => handleFooterForm()}>
                <span>Senden</span>
                {loader ? <Loader /> : <img src={RightIcon} alt="RightIcon" />}
              </div>
            </div>
          </div>
          <div className="footer-menu">
            <NavLink to="/service">Angebot</NavLink>
            <NavLink to="/about-us">Über uns</NavLink>
            <NavLink to="/job-ads">Karriere</NavLink>
            <a>Kontakt</a>
            <NavLink to="/projects">Referenzen</NavLink>
            <a>Impressum</a>
            <a>Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
