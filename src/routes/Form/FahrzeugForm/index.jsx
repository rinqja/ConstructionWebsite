import React, { useState } from "react";
import "./FahrzeugForm.scss";
import LeftIcon from "../../../assets/icons/left-sm.svg";
import RightIcon from "../../../assets/icons/right-sm.svg";

export default function FahrzeugForm(props) {
  const { setMypages, formData, setFormData } = props;
  console.log("StepTwo_props_", props);
  const [formErrors, setFormErrors] = useState({});

const vehicleOptions = [
    { name: "Sattelzugmaschine", measurements: "16,50 x 2,50 x 3,50 m (l x b x h)" , brackets:"- kann nur nach hinten abkippen -"},
    { name: "LKW 3-Achser mit Anhänger", measurements: "16,50 x 2,50 x 3,50 m (l x b x h)",brackets:"- kann nach hinten und seitlich abkippen -" },
    { name: "LKW 3-Achser solo (ohne Anhänger)", measurements: "8,50 x 2,50 x 3,50 m (l x b x h)",brackets:"- kann nach hinten und seitlich abkippen -" },
    { name: "Hakenwagen", measurements: "8,50 x 2,50 x 3,50 m (l x b x h)",brackets:"- kann nur nach hinten abkippen -" }
];

const handleFieldDetails = (e) => {
  const selectedVehicle = vehicleOptions.find(option => option.name === e.target.value);
  setFormData({ 
    ...formData, 
    vehicleType: selectedVehicle.name, 
    measurements: selectedVehicle.measurements,
    brackets: selectedVehicle.brackets
  });
  setFormErrors({ ...formErrors, [e.target.name]: "" });
};

  const handleNextData = () => {
    let errors = {};

    if(!formData.vehicleType) {
      errors.vehicleType = "Fahrzeugtyp ist erforderlich.";
    }

    if(Object.keys(errors).length > 0) {
      setFormErrors(errors);
    }
    else {
      setMypages("Stepthree");
    }
  };

  return (
    <div>
      <div className="fahrzeug-form-contnet-alignment">
        <div>
          <div className="text">
            <p>In welchem Fahrzeug kann geliefert werden?</p>
          </div>
          <div className="input">
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={(e) => handleFieldDetails(e)}
            >
              <option  disabled value="">Fahrezeugtyp</option>
              {vehicleOptions.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
            {formErrors.vehicleType && <span className="error-message">{formErrors.vehicleType}</span>}
          </div>
         <div className="input">
         <div className="measurements">
    {formData.measurements ? formData.measurements : ''} <br />
    {formData.brackets }
  </div>
</div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepone")}>
              <img src={LeftIcon} alt="RightIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={() => {
                // setMypages("Stepthree");
                handleNextData();
              }}
            >
              <span>Weiter</span>
              <img src={RightIcon} alt="RightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}