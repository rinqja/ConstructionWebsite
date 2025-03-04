import React, { useState } from "react";
import "./WelchesForm.scss";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";


export default function WelchesForm({ setMypages, formData, setFormData, onMaterialChange, handleSubmitButton, steps }) {
  const [formErrors, setFormErrors] = useState({});

  const handleMaterialTypeInteraction = (e) => {
    // Check if newDropdown is not selected and materialType dropdown is disabled
    if (!formData.newDropdown && e.target.name === "materialType") {
      setFormErrors(prevFormErrors => ({
        ...prevFormErrors,
        materialTypeInteraction: "Press the up dropdown"
      }));
    }
  };
  const handleFieldDetails = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    // Clear any existing error for the changed field
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: ""
    }));
  };
  const handleMaterialTypeFocus = () => {
    if (!formData.newDropdown) {
      setFormErrors(prevFormErrors => ({
        ...prevFormErrors,
        materialType: "Not available right now" // Set the custom error message
      }));
    }
  };
  const handleNextButton = () => {
    let errors = {};

    // Validation checks
    if (!formData.materialType) {
      errors.materialType = "Art des Materials ist erforderlich.";
    }
    // if (!formData.crowd) {
    //     errors.crowd = "Menge ist erforderlich.";
    // }
    // if (!formData.unitType) {
    //     errors.unitType = "Einheit ist erforderlich.";
    // }
    if (!formData.newDropdown) {
      errors.newDropdown = "Bitte eine Option wählen."; // Error message for newDropdown
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      if (steps === 5) {
        // Prepare formData for submission
        const submissionFormData = {
          ...formData,
          // Set the fields of the next steps to null
          // Another example field
          // Add other fields here that are not part of the current form step
        };

        // Call the handleSubmitButton function with the prepared formData
        handleSubmitButton(submissionFormData);
      } else {
        // Proceed to the next step
        setMypages("Stepseven");
      }
    }
  };


  return (
    <div>
      <div className="welches-form-all-contnet-alignment">
        <div className="first">
          <div className="text">
            <p>Welches Material?</p>
          </div>
          <div className="input dropdown-container">
            <select
              name="newDropdown" // Ensure this matches the state field name
              value={formData.newDropdown}
              onChange={handleFieldDetails}
            >
              <option value="" disabled selected hidden>Art des Materials</option>
              {formData.containersSize.includes("5 m³") && (
                <>
                  <option value="boden">Boden</option>
                  <option value="bodenGrasnarbe">Boden/Grasnarbe</option>
                  <option value="bauschutt">Bauschutt</option>
                  <option value="beton">Beton</option>
                  <option value="asphalt">Asphalt</option>
                  <option value="bodenBauschutt">Boden/Bauschutt</option>
                </>)}
              {formData.containersSize.includes("7 m³") && (
                <>
                  <option value="bodenGrasnarbe">Boden/Grasnarbe</option>
                  <option value="bauschutt">Bauschutt</option>
                  <option value="beton">Beton</option>
                  <option value="asphalt">Asphalt</option>
                  <option value="bodenBauschutt">Boden/Bauschutt</option>
                </>
              )}
              {formData.containersSize.includes("10 m³") && (
                <>
                  <option value="boden10">Boden</option>
                  <option value="bodenGrasnarbe10">Boden/Grasnarbe</option>
                  <option value="bauschutt10">Bauschutt</option>
                  <option value="beton10">Beton</option>
                  <option value="asphalt10">Asphalt</option>
                  <option value="bodenBauschutt10">Boden/Bauschutt</option>
                </>
              )}{(formData.containersSize.includes("20 m³") || formData.containersSize.includes("36 m³")) && (
                <>
                  <option value="gemischteBauAbbruchabfälle">Gemischte Bau- und Abbruchabfälle</option>
                  <option value="holzA1A3">Holz A1-A3</option>
                  <option value="holzA4">Holz A4 (gefährlicher Abfall)</option>
                  <option value="baumStrauchschnitt">Baum und Strauchschnitt, Grünabfälle</option>
                  <option value="wurzelwerkStubben">Wurzelwerk/Stubben</option>
                  <option value="dachpappeOhneTeer">Dachpappe, ohne Teeranhaftung</option>
                  <option value="dachpappeMitTeer">Dachpappe, mit Teeranhaftung (gefährlicher Abfall)</option>
                  <option value="asbest">Asbest (gefährlicher Abfall)</option>
                  <option value="glas">Glas</option>
                  <option value="kunststoffFenster">Fenster aus Kunststoff</option>
                  <option value="holzFenster">Fenster aus Holz (gefährlicher Abfall)</option>
                  <option value="dämmwolle">Dämmwolle</option>
                  <option value="kmfDämmwolle">Dämmwolle (KMF – gefährlicher Abfall)</option>
                  <option value="styropor">Styropor</option>
                  <option value="hbcdStyropor">Styropor (HBCD haltig, gefährlicher Abfall)</option>
                  <option value="rigips">Rigips</option>
                </>
              )}
            </select>
            {formErrors.newDropdown && <span className="error-message">{formErrors.newDropdown}</span>}

          </div>
          {/* <div className="input new" onClick={handleMaterialTypeInteraction}>
  <select
    id=""
    name="materialType"
    value={formData.materialType}
    onChange={handleFieldDetails}
    disabled={!formData.newDropdown}
  >
    <option value="" disabled selected hidden>Materialien die fremdentsorgt werden</option>
  <option value="gemischteBauAbbruchabfaelle">Gemischte Bau- und Abbruchabfälle</option>
  <option value="holzA1A3">Holz A1-A3</option>
  <option value="holzA4">Holz A4 (gefährlicher Abfall)</option>
  <option value="baumStrauchschnittGruenabfaelle">Baum und Strauchschnitt, Grünabfälle</option>
  <option value="wurzelwerkStubben">Wurzelwerk/Stubben</option>
  <option value="dachpappeOhneTeer">Dachpappe, ohne Teeranhaftung</option>
  <option value="dachpappeMitTeer">Dachpappe, mit Teeranhaftung (gefährlicher Abfall)</option>
  <option value="asbest">Asbest (gefährlicher Abfall)</option>
  <option value="glas">Glas</option>
  <option value="fensterKunststoff">Fenster aus Kunststoff</option>
  <option value="fensterHolz">Fenster aus Holz (gefährlicher Abfall)</option>
  <option value="daemmwoolle">Dämmwolle</option>
  <option value="daemmwoolleKMF">Dämmwolle (KMF – gefährlicher Abfall)</option>
  <option value="styropor">Styropor</option>
  <option value="styroporHBCD">Styropor (HBCD haltig, gefährlicher Abfall)</option>
  <option value="rigips">Rigips</option>
    
  
  </select>
  {formErrors.materialType && <span className="error-message">{formErrors.materialType}</span>}
  {formErrors.materialTypeInteraction && <span className="error-message">{formErrors.materialTypeInteraction}</span>}
</div> */}

          <div className="two-col-grid">
            {/* <div className="input">
              <input
                type="text"
                placeholder="Menge"
                name="crowd"
                value={formData.crowd}
                onChange={(e) => handleFieldDetails(e)}
              />
              {formErrors.crowd && <span className="error-message">{formErrors.crowd}</span>}
            </div> */}
            {/* <div className="input">
              <select
                id=""
                onChange={(e) => handleFieldDetails(e)}
                name="unitType"
                value={formData.unitType}
              >
                <option value="">Einheit auswählen</option>
                <option value="t (tone)">t (tone)</option>
                <option value="m³">m³</option>
               
              </select>
              {formErrors.unitType && <span className="error-message">{formErrors.unitType}</span>}
            </div> */}
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepfive")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={() => setMypages("Stepseven")}
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