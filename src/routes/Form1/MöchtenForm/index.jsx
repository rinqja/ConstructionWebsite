import React from "react";
import "./MöchtenForm.scss";
import TrueIcon from "../../../assets/icons/true.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";

export default function MöchtenForm(props) {
  const { setMypages, formData, setFormData } = props;
  console.log("StepThree_props_", props);

  const handleFieldDetails = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className="mochten-form-all-content-alignment">
        <div>
          <div className="space-remove">
            <div className="repeat-text">
              <p>Möchten Sie vor Ort sein bei der Lieferung?</p>
              <div className="new-icon-text">
                <div
                  onClick={() => handleFieldDetails("deliveryPresence", true)}
                  className={formData.deliveryPresence === true && `selected-option`}
                >
                  <span>Ja</span>
                  <img src={TrueIcon} alt="TrueIcon" />
                </div>
                <div
                  onClick={() => handleFieldDetails("deliveryPresence", false)}
                  className={formData.deliveryPresence === false && `selected-option`}
                >
                  <span>Nein</span>
                  <img src={CloseIcon} alt="CloseIcon" />
                </div>
              </div>
            </div>
            <div className="repeat-text">
              <p>Möchten Sie vor Lieferung angerufen werden?</p>
              <div className="new-icon-text">
                <div
                  onClick={() => handleFieldDetails("preDeliveryCall", true)}
                  className={formData.preDeliveryCall === true && `selected-option`}
                >
                  <span>Ja</span>
                  <img src={TrueIcon} alt="TrueIcon" />
                </div>
                <div
                  onClick={() => handleFieldDetails("preDeliveryCall", false)}
                  className={formData.preDeliveryCall === false && `selected-option`}
                >
                  <span>Nein</span>
                  <img src={CloseIcon} alt="CloseIcon" />
                </div>
              </div>
            </div>
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Steptwo")}>
              <img src={LeftIcon} alt="RightIcon" />
              <span>Zurück</span>
            </div>
            <div className="icon-text" onClick={() => setMypages("Stepfour")}>
              <span>Weiter</span>
              <img src={RightIcon} alt="RightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
