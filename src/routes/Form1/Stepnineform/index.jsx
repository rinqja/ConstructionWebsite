import React, { useState } from "react";
import "./stepnine.scss";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";

import Logo from "../../../assets/logo/Capa.svg"

import TrueIcon from "../../../assets/icons/true.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import icon from "../../../assets/imges/icon.svg";

export default function StepnineForm({ setMypages, formData, setFormData, handleSubmitButton }) {
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
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
      errors.newDropdown = "Bitte eine Option wählen.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Prepare formData for submission
      const submissionFormData = {
        ...formData,
        // Set the fields of the next steps to null
        containersSize: null,
        propertyType: null,
      };

      // Call the handleSubmitButton function with the prepared formData
      handleSubmitButton(submissionFormData);
    }
  };

  return (
    <div className="logo-layout">
      <img src={Logo} alt="LogoImage" />
      <div className="finish-layout">
        <div className="header">
          <h1>Fuhrbetrieb</h1>
          <div className="header-info">
          </div>
        </div>

        <div className="form-and-checkboxes">
          <div className="billing-info">
            {formData.type === 'Gewerblich' ? (
              <>
                <input className="styled-input" type="text" name="firmenname" placeholder="Firmenname" value={formData.firmenname} readOnly />
                <input className="styled-input" type="text" name="strasse" placeholder="Strasse" value={formData.strasse} readOnly />
              </>
            ) : (
              <>
                <input className="styled-input" type="text" name="lastName" placeholder="Nachname" value={formData.lastName} readOnly />
                <input className="styled-input" type="text" name="firstName" placeholder="Vorname" value={formData.firstName} readOnly />
              </>
            )}
            <div className="phone-container">
              <input className="styled-input half-width" type="date" name="date" placeholder="Datum" value={formData.date} onChange={handleInputChange} readOnly />
              <input className="styled-input half-width" type="time" name="time" placeholder="Uhrzeit" value={formData.time} onChange={handleInputChange} readOnly />
            </div>
            <input className="styled-input" type="text" name="address" placeholder="Adresse" value={formData.address} onChange={handleInputChange} readOnly />
            <input className="styled-input" type="text" name="billingAddress" placeholder="Rechnungsadresse" value={formData.billingAddress} onChange={handleInputChange} readOnly />
            <p>Kontaktdaten</p>
            <input className="styled-input" type="text" name="emailAddress" placeholder="E-mail" value={formData.emailAddress} onChange={handleInputChange} readOnly />
            <input className="styled-input" type="text" name="phoneNumber" placeholder="Telefonnummer" value={formData.phoneNumber} onChange={handleInputChange} readOnly />
            <div className="checkboxGroupsContainer">
              <p>Fahrezeug</p>
              <input className="styled-input" type="text" name="fahrezeug" placeholder="fahrezeug" value={formData.vehicleType} onChange={handleInputChange} readOnly />
              <br />
              <br />
              <div className="repeat-text">
                <p>Möchten Sie vor Lieferung angerufen werden?</p>
                <div className="new-icon-text">
                  <div className={formData.preDeliveryCall ? `selected-option` : ''}>
                    <span>Ja</span>
                    <img src={TrueIcon} alt="TrueIcon" />
                  </div>
                  <div className={formData.preDeliveryCall === false ? `selected-option` : ''}>
                    <span>Nein</span>
                    <img src={CloseIcon} alt="CloseIcon" />
                  </div>
                </div>
              </div>
              <div className="repeat-text">
                <p>Möchten Sie vor Ort sein bei der Lieferung?</p>
                <div className="new-icon-text">
                  <div
                    onClick={() => handleFieldDetails("deliveryPresence", true)}
                    className={formData.deliveryPresence ? `selected-option` : ''}
                  >
                    <span>Ja</span>
                    <img src={TrueIcon} alt="TrueIcon" />
                  </div>
                  <div
                    onClick={() => handleFieldDetails("deliveryPresence", false)}
                    className={formData.deliveryPresence === false ? `selected-option` : ''}
                  >
                    <span>Nein</span>
                    <img src={CloseIcon} alt="CloseIcon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="waste-selection">
            <p>Abholung / Unterbringung</p>
            {formData.newDropdown === 'Unterbringung' && (
              <>
                <input className="styled-input2" type="text" name="phoneNumber" placeholder="Telefonnummer" value={formData.newDropdown} onChange={handleInputChange} readOnly />

                <div className="checkboxContainer">
                  <p>1</p>
                  <input type="checkbox" id="checkbox1" name="checkbox1" className="myCheckbox" checked={formData.materialType === 'Asphaltunterbringung'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Asphaltunterbringung</span>
                </div>
                <div className="checkboxContainer">
                  <p>2</p>
                  <input type="checkbox" id="checkbox2" className="myCheckbox" name="checkbox2" checked={formData.materialType === 'Bauschuttunterbringung'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Bauschuttunterbringung</span>
                </div>
                <div className="checkboxContainer">
                  <p>3</p>
                  <input type="checkbox" id="checkbox3" className="myCheckbox" name="checkbox3" checked={formData.materialType === 'BetonunterbringungGuteQualität'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Betonunterbringung bei guter Qualität</span>
                </div>
                <div className="checkboxContainer">
                  <p>4</p>
                  <input type="checkbox" id="checkbox4" className="myCheckbox" name="checkbox4" checked={formData.materialType === 'Betonunterbringung500mm'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Betonunterbringung bis 500mm</span>
                </div>
                <div className="checkboxContainer">
                  <p>5</p>
                  <input type="checkbox" id="checkbox5" className="myCheckbox" name="checkbox5" checked={formData.materialType === 'BetonunterbringungUebergroesse'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Betonunterbringung Übergröße</span>
                </div>
                <div className="checkboxContainer">
                  <p>6</p>
                  <input type="checkbox" id="checkbox6" className="myCheckbox" name="checkbox6" checked={formData.materialType === 'Bodenunterbringung'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Bodenunterbringung</span>
                </div>
                <div className="checkboxContainer">
                  <p>7</p>
                  <input type="checkbox" id="checkbox7" className="myCheckbox" name="checkbox7" checked={formData.materialType === 'BodenunterbringungGrasnarbe'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Bodenunterbringung mit Grasnarbe</span>
                </div>
                <div className="checkboxContainer">
                  <p>8</p>
                  <input type="checkbox" id="checkbox8" className="myCheckbox" name="checkbox8" checked={formData.materialType === 'BodenunterbringungSteine'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Bodenunterbringung mit Steinen</span>
                </div>
                <div className="checkboxContainer">
                  <p>9</p>
                  <input type="checkbox" id="checkbox9" className="myCheckbox" name="checkbox9" checked={formData.materialType === 'Kalksandsteinunterbringung'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Kalksandsteinunterbringung</span>
                </div>

                <div className="checkboxContainer">
                  <p>10</p>
                  <input type="checkbox" id="checkbox10" className="myCheckbox" name="checkbox10" checked={formData.materialType === 'Ytongunterbringung'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Ytongunterbringung</span>
                </div>
              </>
            )}
            {formData.newDropdown === 'Abholung' && (
              <>
                <input className="styled-input2" type="text" name="phoneNumber" placeholder="Telefonnummer" value={formData.newDropdown} onChange={handleInputChange} readOnly />

                <div className="checkboxContainer">
                  <p>1</p>
                  <input type="checkbox" id="checkbox11" className="myCheckbox" name="checkbox11" checked={formData.materialType === 'Asphaltphräsgut'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Asphaltphräsgut</span>
                </div>
                <div className="checkboxContainer">
                  <p>2</p>
                  <input type="checkbox" id="checkbox12" className="myCheckbox" name="checkbox12" checked={formData.materialType === 'Betongrecycling'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Betongrecycling (Schotter)</span>
                </div>
                <div className="checkboxContainer">
                  <p>3</p>
                  <input type="checkbox" id="checkbox13" className="myCheckbox" name="checkbox13" checked={formData.materialType === 'Füllsand'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Füllsand</span>
                </div>
                <div className="checkboxContainer">
                  <p>4</p>
                  <input type="checkbox" id="checkbox14" className="myCheckbox" name="checkbox14" checked={formData.materialType === 'Kies08'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Kies 0/8</span>
                </div>
                <div className="checkboxContainer">
                  <p>5</p>
                  <input type="checkbox" id="checkbox15" className="myCheckbox" name="checkbox15" checked={formData.materialType === 'Kies016'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Kies 0/16</span>
                </div>
                <div className="checkboxContainer">
                  <p>6</p>
                  <input type="checkbox" id="checkbox16" className="myCheckbox" name="checkbox16" checked={formData.materialType === 'Kies032'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Kies 0/32</span>
                </div>
                <div className="checkboxContainer">
                  <p>7</p>
                  <input type="checkbox" id="checkbox17" className="myCheckbox" name="checkbox17" checked={formData.materialType === 'Körnung816'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Körnung 8/16</span>
                </div>
                <div className="checkboxContainer">
                  <p>8</p>
                  <input type="checkbox" id="checkbox18" className="myCheckbox" name="checkbox18" checked={formData.materialType === 'Körnung1632'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Körnung 16/32</span>
                </div>
                <div className="checkboxContainer">
                  <p>9</p>
                  <input type="checkbox" id="checkbox19" className="myCheckbox" name="checkbox19" checked={formData.materialType === 'LotSand'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Lot Sand 0-2 / Mauersand</span>
                </div>
                <div className="checkboxContainer">
                  <p>10</p>
                  <input type="checkbox" id="checkbox20" className="myCheckbox" name="checkbox20" checked={formData.materialType === 'Mineralgemisch'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Mineralgemisch 0-32</span>
                </div>
                <div className="checkboxContainer">
                  <p>11</p>
                  <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.materialType === 'Mischboden'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Mischboden</span>
                </div>
                <div className="checkboxContainer">
                  <p>12</p>
                  <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.materialType === 'Mutterboden'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Mutterboden</span>
                </div>
                <div className="checkboxContainer">
                  <p>13</p>
                  <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.materialType === 'Pflasterbettungssplitt'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Pflasterbettungssplitt 0-5)</span>
                </div>
                <div className="checkboxContainer">
                  <p>14</p>
                  <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.materialType === 'Pflastersand'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Pflastersand</span>
                </div>
                <div className="checkboxContainer">
                  <p>15</p>
                  <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.materialType === 'Rotsteinrecycling'}
                    readOnly
                    onChange={handleCheckboxChange} />
                  <span>Rotsteinrecycling 0/45</span>
                </div>
              </>
            )}

          </div>
        </div>

        <div className="footer">
          <div className="dateCheckboxContainer">
            <input type="text" className="datumlast-input" placeholder="Bemerkung:" value={formData.remarks} onChange={handleInputChange} readOnly />

          </div>
          <div className="bottomFooter">
            {formData.uploadPhotos.map((photo, index) => (
              <div key={index} className="styled-picture">
                <img src={URL.createObjectURL(photo)} alt={`Uploaded ${index}`} width={200} height={140} />
              </div>
            ))}
            {Array(5 - formData.uploadPhotos.length).fill().map((_, index) => (
              <div key={index + formData.uploadPhotos.length} className="styled-picture">
                <img src={icon} alt={`Default ${index}`} width={60} height={60} />
              </div>
            ))}
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepfive")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={handleSubmitButton}
            >
              <span>Weiter</span>
              <img src={RightIcon} alt="RightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}