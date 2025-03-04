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
import image5m3 from "../../assets/imges/5meters.png";
import image7m3 from "../../assets/imges/7meters.png";
import image10m3 from "../../assets/imges/10meters.png";
import image20m3 from "../../assets/imges/20meters.png";
import image36m3 from "../../assets/imges/30meters.png";
import containers from "../../assets/imges/containers.png";
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
import StepnineForm from "./Stepnineform";
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
      formData.uploadPhotos.forEach((file) => {
        payload.append("photo", file); // The backend should be expecting an array of files with the key `photos[]`
      });
    } else {
      payload.append("photo", null);
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
    payload.append("material_type", formData.newDropdown);
    payload.append("crowd", formData.crowd);
    payload.append("unit", formData.unitType);
    payload.append("container_size[]", formData.containersSize ?? "-");
    payload.append("property_type", formData.propertyType ?? "-");
    payload.append("new_dropdown", formData.newDropdown);
    payload.append("stapperType", "containerform");

    try {
      const res = await ApiPost("/stepper", payload, formDataHeader);

      if (res.status === 200) {
        // Send email notification
        const emailPayload = {
          subject: "Neuer Auftrag: Container",
          text: "ihr habt einen neuen Container Auftrag in euerm System.",
        };

        const emailRes = await ApiPost1("/success/send", emailPayload);

        if (emailRes.status === 200) {
          toast.success("Email submitted successfully.");
          // Navigate to Stepeight after successful API response
          setMypages("Stepeight");
        }
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during submission.");
    }
  };

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
    containersSize: [],
  });

  const handleNavigation = (nextStep) => {
    setMypages(nextStep);
    changeBanner('FormBanner');
    setIsBannerVisible(nextStep === "Stepsix");
  };
  return (
    mypages === "Stepeight" ? (
      <StepnineForm
        setMypages={setMypages}
        formData={formData}
        setFormData={setFormData}
        handleSubmitButton={handleSubmitButton}
      />) : (
      <div className={`bigpicture ${mypages === "Stepone" ? "bigpicture-stepone" : ""}`}>
        <div className="form-layout">
          <div className="form-layout-items">
            <div className={mypages === "Stepone" ? "" : (mypages === "Stepfive" ? "form-banner" : "form-banner")}>
              <img
                src={
                  mypages === "Stepone" ? "" :
                    (mypages === "Stepfive" ?
                      (formData.containersSize.toString() === ["5 m³"].toString() ? image5m3 :
                        formData.containersSize.toString() === ["7 m³"].toString() ? image7m3 :
                          formData.containersSize.toString() === ["10 m³"].toString() ? image10m3 :
                            formData.containersSize.toString() === ["20 m³"].toString() ? image20m3 :
                              formData.containersSize.toString() === ["36 m³"].toString() ? image36m3 :
                                containers) : FormBanner)
                }
                alt={mypages === "Stepone" ? "" : "Form Banner"}
              />
            </div>
          </div>
          <div className="form-layout-items">
            <div className="form-logo">
              <NavLink to="/">
                <img src={Logo} alt="Logo" style={{ width: '300px', height: '68.12px' }} />
              </NavLink>
            </div>
            {mypages === "Stepone" && <GewerblichForm setMypages={setMypages} formData={formData} setFormData={setFormData} />}
            {mypages === "Steptwo" && <FahrzeugForm setMypages={setMypages} formData={formData} setFormData={setFormData} />}
            {mypages === "Stepthree" && <MöchtenForm setMypages={setMypages} formData={formData} setFormData={setFormData} />}
            {mypages === "Stepfour" && <BemerkungForm setMypages={setMypages} formData={formData} setFormData={setFormData} />}
            {mypages === "Stepfive" && <BehalterForm setMypages={setMypages} formData={formData} setFormData={setFormData} onMaterialChange={handleMaterialChange} />}
            {mypages === "Stepsix" && <WelchesForm setMypages={setMypages} formData={formData} setFormData={setFormData} onMaterialChange={handleMaterialChange} />}
            {mypages === "Stepseven" && <OffentlicherForm setMypages={setMypages} formData={formData} setFormData={setFormData} />}
            {mypages === "Stepeight" && <StepnineForm setMypages={setMypages} formData={formData} setFormData={setFormData} handleSubmitButton={handleSubmitButton} />}
            {mypages === "Stepnine" && (
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