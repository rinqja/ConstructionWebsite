import React, { useState } from "react";
import "./OffentlicherForm.scss";

import HomeIcon from "../../../assets/icons/home-icon.svg";
import HomeIcon1 from "../../../assets/icons/home1.svg";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";
import { ApiPost, formDataHeader } from "../../../API/ApiData";
import { toast } from "react-hot-toast";
import Loader from "../../Loader";

export default function OffentlicherForm(props) {
  const { setMypages, formData, setFormData, handleSubmitButton } = props;
  console.log("StepSeven_props_", props);
  const [loader, setLoader] = useState(false);

  const handleFieldDetails = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  ;

  return (
    <div>
      <div className="offenticher-form-all-content-alignment-for-page">
        <div className="w-full">
          <div className="text">
            <span>Privatgrundstück oder öffentlicher Bereich?</span>
          </div>
          <div className="two-button-alignment">
            <div
              onClick={() => handleFieldDetails("propertyType", "Private")}
              className={
                formData.propertyType === "Private" && `selected-option`
              }
            >
              <span>Private</span>
              <img src={HomeIcon} alt="HomeIcon" />
            </div>
            <div
              onClick={() => handleFieldDetails("propertyType", "Public")}
              className={
                formData.propertyType === "Public" && `selected-option`
              }
            >
              <span>Öffentlich</span>
              <img src={HomeIcon1} alt="HomeIcon1" />
            </div>
          </div>
          <div className="sec-text">
            <p>
              Ggf. muss der Container bei Aufstellung vorab bei der Polizei
              angemeldet werden
            </p>
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepsix")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            {formData?.propertyType ? (
              <div className="icon-text" onClick={() => setMypages("Stepeight")}>
                <span>Weiter</span>
                {loader ? <Loader /> : <img src={RightIcon} alt="RightIcon" />}
              </div>
            ) : (
              <div className="disable-text">
                <span>Weiter</span>
                <img src={RightIcon} alt="RightIcon" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
