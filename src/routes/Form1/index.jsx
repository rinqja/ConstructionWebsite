import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Form.scss";
import { useNavigate } from "react-router-dom";
import { ApiPost, formDataHeader, ApiPost1 } from "./../../API/ApiData";
import FormBanner from "../../assets/imges/form-banner.png";
import Logo from "../../assets/logo/Capa.svg";
import nowimage from "../../assets/imges/pictureicon.png";
import BauschuttunterbringungImage from "../../assets/imges/Bauschuttunterbringung.jpg";
import Fullsand from "../../assets/imges/fullsand.jpg";
import Qualitet from "../../assets/imges/qualitet.jpg";
import schotter from "../../assets/imges/schotter.jpg";
import kies from "../../assets/imges/kies016.jpg";
import kies32 from "../../assets/imges/kies32.jpg";
import kies8 from "../../assets/imges/kies8.jpg";
import Sand from "../../assets/imges/sand.jpg";
import mischboden from "../../assets/imges/mischboden.jpg";
import kornung1632 from "../../assets/imges/kornung.jpg";
import plafsterbettungssplit from "../../assets/imges/pflasterbettungsplit.jpg";
import GewerblichForm from "./GewerblichForm";
import FahrzeugForm from "./FahrzeugForm";
import MöchtenForm from "./MöchtenForm";
import BemerkungForm from "./BemerkungForm";
import WelchesForm from "./WelchesForm";
import BehalterForm from "./BehalterForm";
import OffentlicherForm from "./OffentlicherForm";
import StepeightForm from "./Message";
import StepnineForm from './Stepnineform';
import toast from "react-hot-toast";



export default function Form() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const maxSteps = location.state?.steps || 7;

  const changeBanner = (newBanner) => {
    setBannerImage(newBanner);
  };
  const materialImages = {
    "Bauschuttunterbringung": BauschuttunterbringungImage,
    "BetonunterbringungGuteQualität": Qualitet,
    "Betonunterbringung500mm": nowimage,
    "Bodenunterbringung": nowimage,
    "BodenunterbringungGrasnarbe": nowimage,
    "BodenunterbringungSteine": nowimage,
    "Kalksandsteinunterbringung": nowimage,
    "Ytongunterbringung": nowimage,
    "BetonunterbringungUebergroesse": nowimage,
    "Füllsand": Fullsand,
    "Betongrecycling": schotter,
    "Kies016": kies,
    "Kies032": kies32,
    "Mischboden": mischboden,
    "LotSand": Sand,
    "Kies08": kies8,
    "Körnung1632": kornung1632,
    "Pflasterbettungssplitt": plafsterbettungssplit,



  };



  const handleMaterialChange = (material_type) => {
    setFormData({ ...formData, materialType: material_type });
  };


  const [mypages, setMypages] = useState("Stepone");
  const handleSubmitButton = async () => {


    const [year, month, day] = formData.date.split("-");
    const [hour, minute] = formData.time.split(":");
    const combinedDate = new Date(year, month - 1, day, hour, minute, 0, 0);
    const isoDate = combinedDate.toISOString();

    const payload = new FormData();
    if (formData.uploadPhotos && formData.uploadPhotos.length > 0) {
      formData.uploadPhotos.forEach((file, index) => {
        payload.append(`photo`, file); // The backend should be expecting an array of files with the key `photos[]`
      });
    } else {
      // If no photos are uploaded, append a single photo key with a null value
      payload.append('photo', null);
    }
    payload.append("type", formData.type);

    if (formData.type === "Gewerblich") {
      payload.append("first_name", formData.firmenname);
      payload.append("street", formData.strasse);
      payload.append("pincode", formData.plz);
      payload.append("city", formData.ort);
    } else if (formData.type === "Privat") {
      payload.append("first_name", formData.firstName);
      payload.append("last_name", formData.lastName);
    }
    payload.append("date", isoDate);
    payload.append("address", formData.address);
    payload.append("billing_address", formData.billingAddress);
    payload.append("email", formData.emailAddress);
    payload.append("phone", formData.phoneNumber);
    payload.append("vehical_type", formData.vehicleType);
    payload.append("delivery_presence", formData.deliveryPresence);
    payload.append("pre_delivery_call", formData.preDeliveryCall);
    payload.append("remarks", formData.remarks);
    payload.append("material_type", formData.materialType);
    payload.append("crowd", formData.crowd);
    payload.append("unit", formData.unitType);
    payload.append("container_size[]", formData.containersSize);
    payload.append("property_type", formData.propertyType);
    payload.append("new_dropdown", formData.newDropdown);
    payload.append("measurements", formData.measurements);
    payload.append("stapperType", "fuhrbetriebform");


    await ApiPost("/stepper", payload, formDataHeader)
      .then((res) => {
        console.log("formData_res", res);

        if (res.status === 200) {
          // Prepare email payload
          const emailPayload = {
            subject: "Neuer Auftrag: Fuhrbetrieb",
            text: "ihr habt einen neuen Fuhrbetrieb Auftrag in euerm System.",
          };

          // Send email
          ApiPost1("/success/send", emailPayload)
            .then((emailRes) => {
              console.log("Email_Res_", emailRes);
              if (emailRes.status === 200) {
                toast.success("Email sent successfully");
                // Navigate to Stepeight after successful API response
                console.log("Submission successful, moving to step 8");
                setMypages("Stepeight");
              }
            })
            .catch((emailError) => {
              console.log("Email_Error", emailError);
              toast.error(emailError);
            });
        }
      })
      .catch((error) => {
        console.log("formData_res", error);

        toast.error(error);
      });
  }


  const [formData, setFormData] = useState({
    type: "",
    lastName: "",
    firstName: null,
    firmenname: "",
    strasse: "",
    plz: "",
    ort: "",
    date: "",
    timePeriod: "",
    time: "",
    address: "",
    billingAddress: "",
    emailAddress: "",
    phoneNumber: "",
    vehicleType: "",
    deliveryPresence: true,
    preDeliveryCall: true,
    remarks: null,
    uploadPhotos: [],
    materialType: "",
    crowd: "",
    unitType: "",
    containersSize: null,
    propertyType: null,
    measurements: "",
    // selectedMaterial: "",
  });
  const handleNavigation = (nextStep) => {
    setMypages(nextStep);
    changeBanner('FormBanner');
    // Set the banner visibility based on the step
    setIsBannerVisible(nextStep === "Stepsix"); // Example condition
  };

  return (
    mypages === "Stepsix" ? (//change it to stepsix later
      <StepnineForm
        setMypages={setMypages}
        formData={formData}
        setFormData={setFormData}
        handleSubmitButton={handleSubmitButton}
      />) : (
      <div className={`bigpicture ${mypages === "Stepone" ? "bigpicture-stepone" : ""}`}>
        <div className="form-layout">
          <div className="form-layout-items">
            <div className="form-banner">
              {mypages !== "Stepone" && (
                <img src={mypages === "Stepfive" ? materialImages[formData.materialType] || FormBanner : FormBanner} alt="Form Banner" />
              )}         </div>

          </div>
          <div className="form-layout-items">
            <div className="form-logo">
              <NavLink to="/">
                <img src={Logo} alt="Logo" style={{ width: '300px', height: '68.12px' }} />
              </NavLink>
            </div>
            {mypages === "Stepone" && (
              <GewerblichForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {mypages === "Steptwo" && (
              <FahrzeugForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {mypages === "Stepthree" && (
              <MöchtenForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              />
            )}
            {mypages === "Stepfour" && (
              <BemerkungForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              />
            )}

            {mypages === "Stepfive" && (
              <WelchesForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              //  handleSubmitButton={handleSubmitButton}
              />
            )}

            {mypages === "Stepeight" && (
              <StepeightForm
                setMypages={setMypages}
                formData={formData}
                setFormData={setFormData}
              // Add any other props or handlers your StepeightForm needs
              />
            )}
          </div>
        </div>
      </div>
    )
  );
}