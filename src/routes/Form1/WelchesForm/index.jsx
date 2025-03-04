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
        materialType: "Not available" // Set the custom error message
      }));
    }
  };
  const handleNextButton = () => {
    let errors = {};

    // Validation checks
    if (!formData.materialType) {
      errors.materialType = "Art des Materials ist erforderlich.";
    }
    if (!formData.crowd) {
      errors.crowd = "Menge ist erforderlich.";
    }
    if (!formData.unitType) {
      errors.unitType = "Einheit ist erforderlich.";
    }
    if (!formData.newDropdown) {
      errors.newDropdown = "Bitte eine Option wählen."; // Error message for newDropdown
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Prepare formData for submission
      const submissionFormData = {
        ...formData,
        // Set the fields of the next steps to null
        containersSize: null, // Example field from next steps
        propertyType: null,  // Another example field
        // Add other fields here that are not part of the current form step
      };

      // Call the handleSubmitButton function with the prepared formData
      setMypages("Stepsix");
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
              <option value="" disabled selected hidden>Womit können wir helfen?</option>
              <option value="Abholung">Abholung</option>
              <option value="Unterbringung">Unterbringung (Selbstanlieferung)</option>
            </select>
            {formErrors.newDropdown && <span className="error-message">{formErrors.newDropdown}</span>}

          </div>
          <div className="input new" onClick={handleMaterialTypeInteraction}>
            <select
              id=""
              name="materialType"
              value={formData.materialType}
              onChange={handleFieldDetails}
              disabled={!formData.newDropdown}
            >
              <option value="" disabled selected hidden>Bitte wählen</option>
              {formData.newDropdown === "Abholung" && (
                <>
                  {/* Options for 'Abholung' */}
                  <option value="Asphaltphräsgut">Asphaltphräsgut</option>
                  <option value="Betongrecycling">Betongrecycling (Schotter)</option>
                  <option value="Füllsand">Füllsand</option>
                  <option value="Kies08">Kies 0/8</option>
                  <option value="Kies016">Kies 0/16</option>
                  <option value="Kies032">Kies 0/32</option>
                  <option value="Körnung816">Körnung 8/16</option>
                  <option value="Körnung1632">Körnung 16/32</option>
                  <option value="LotSand">Lot Sand 0-2 / Mauersand</option>
                  <option value="Mineralgemisch">Mineralgemisch 0-32</option>
                  <option value="Mischboden">Mischboden</option>
                  <option value="Mutterboden">Mutterboden</option>
                  <option value="Pflasterbettungssplitt">Pflasterbettungssplitt 0-5</option>
                  <option value="Pflastersand">Pflastersand</option>
                  <option value="Rotsteinrecycling">Rotsteinrecycling 0/45</option>
                  {/* Add more options as needed */}
                </>
              )}
              {formData.newDropdown === "Unterbringung" && (
                <>
                  <option value="Bauschuttunterbringung">Bauschuttunterbringung</option>
                  <option value="Asphaltunterbringung">Asphaltunterbringung</option>
                  <option value="BetonunterbringungGuteQualität">Betonunterbringung bei guter Qualität</option>
                  <option value="Betonunterbringung500mm">Betonunterbringung bis 500mm</option>
                  <option value="Bodenunterbringung">Bodenunterbringung</option>
                  <option value="BodenunterbringungGrasnarbe">Bodenunterbringung mit Grasnarbe</option>
                  <option value="BodenunterbringungSteine">Bodenunterbringung mit Steinen</option>
                  <option value="Kalksandsteinunterbringung">Kalksandsteinunterbringung</option>
                  <option value="Ytongunterbringung">Ytongunterbringung</option>
                  <option value="BetonunterbringungUebergroesse">Betonunterbringung Übergroße</option>
                </>
              )}
            </select>
            {formErrors.materialType && <span className="error-message">{formErrors.materialType}</span>}
            {formErrors.materialTypeInteraction && <span className="error-message">{formErrors.materialTypeInteraction}</span>}
          </div>

          <div className="two-col-grid">
            <div className="input">
              <input
                type="text"
                placeholder="Menge"
                name="crowd"
                value={formData.crowd}
                onChange={(e) => handleFieldDetails(e)}
              />
              {formErrors.crowd && <span className="error-message">{formErrors.crowd}</span>}
            </div>
            <div className="input">
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
            </div>
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepthree")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={() => {
                handleNextButton();
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