import React, { useState } from "react";
import "./stepnine.scss";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";

import TrueIcon from "../../../assets/icons/true.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import icon from "../../../assets/imges/icon.svg";
import Logo from "../../../assets/logo/Capa.svg";

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
            <img src={Logo} alt="Logo_Image" />
            <div className="finish-layout">
                <div className="header">
                    <h1>Containergestellung</h1>
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

                            <p>Container</p>
                            <div className="checkboxGroups">
                                <div className="leftGroup">
                                    <div className="checkboxContainer">
                                        <span></span>
                                        <input type="checkbox"
                                            id="checkbox11"
                                            className="myCheckbox"
                                            name="checkbox11"
                                            checked={formData.containersSize.includes("5 m³")}
                                            onChange={() => handleFieldDetails("5 m³")}
                                        />
                                        <span>Mulde 5 cbm</span>
                                    </div>
                                    <div className="checkboxContainer">
                                        <span></span>
                                        <input type="checkbox"
                                            id="checkbox12"
                                            className="myCheckbox"
                                            name="checkbox12"
                                            checked={formData.containersSize.includes("7 m³")}
                                            onChange={() => handleFieldDetails("7 m³")}
                                        />
                                        <span>Mulde 7 cbm</span>
                                    </div>

                                    <div className="checkboxContainer">
                                        <span></span>
                                        <input type="checkbox"
                                            id="checkbox13"
                                            className="myCheckbox"
                                            name="checkbox13"
                                            checked={formData.containersSize.includes("10 m³")}
                                            onChange={() => handleFieldDetails("10 m³")}
                                        />
                                        <span>Container 10 cbm</span>
                                    </div>
                                </div>
                                <div className="rightGroup">
                                    <p></p>
                                    <div className="checkboxContainer">
                                        <span></span>
                                        <input type="checkbox"
                                            id="checkbox33"
                                            className="myCheckbox"
                                            name="checkbox14"
                                            checked={formData.containersSize.includes("20 m³")}
                                            onChange={() => handleFieldDetails("20 m³")}
                                        />
                                        <span>Container 20 cbm</span>
                                    </div>
                                    <div className="checkboxContainer">
                                        <span></span>
                                        <input type="checkbox"
                                            id="checkbox34"
                                            className="myCheckbox"
                                            name="checkbox15"
                                            checked={formData.containersSize.includes("36 m³")}
                                            onChange={() => handleFieldDetails("36 m³")}
                                        />
                                        <span>Container 36 cbm</span>
                                    </div>
                                </div>
                            </div>

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
                        <p>Abfälle zur Beseitigung / Verwertung</p>
                        <div className="checkboxContainer">
                            <p>1</p>
                            <input type="checkbox" id="checkbox1" name="checkbox1" className="myCheckbox" checked={formData?.newDropdown?.toLowerCase() === 'boden'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Reiner mineralischer Bodenaushub</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>2</p>
                            <input type="checkbox" id="checkbox2" className="myCheckbox" name="checkbox2" checked={formData.newDropdown === 'bodenBauschutt'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Reiner mineralischer Bodenaushub mit  <br />Steinen/Bauschutt/Grasnarbe vermischt</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>3</p>
                            <input type="checkbox" id="checkbox3" className="myCheckbox" name="checkbox3" checked={formData?.newDropdown?.toLowerCase() === 'bauschutt'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Reiner mineralischer Bauschutt</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>4</p>
                            <input type="checkbox" id="checkbox4" className="myCheckbox" name="checkbox4" checked={formData?.newDropdown?.toLowerCase() === 'beton'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Reiner Beton/Straßenaufbruch</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>5</p>
                            <input type="checkbox" id="checkbox5" className="myCheckbox" name="checkbox5" checked={formData?.newDropdown?.toLowerCase() === 'asphalt'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Reiner Asphalt/Straßenaufbruch</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>6</p>
                            <input type="checkbox" id="checkbox6" className="myCheckbox" name="checkbox6" checked={formData.newDropdown === 'gemischteBauAbbruchabfälle'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Gemischte Bau- und Abbruchabfälle</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>7</p>
                            <input type="checkbox" id="checkbox7" className="myCheckbox" name="checkbox7" checked={formData.checkbox7} onChange={handleCheckboxChange} />
                            <span>Zerkleinerbare Grünabfälle</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>8</p>
                            <input type="checkbox" id="checkbox8" className="myCheckbox" name="checkbox8" checked={formData.checkbox8} onChange={handleCheckboxChange} />
                            <span>Baumstubben, Wurzeln</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>9</p>
                            <input type="checkbox" id="checkbox9" className="myCheckbox" name="checkbox9" checked={formData.newDropdown === 'holzA4' || formData.newDropdown === 'holzA1A3'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Holzabfälle</span>
                        </div>

                        <div className="checkboxContainer">
                            <p>10</p>
                            <input type="checkbox" id="checkbox10" className="myCheckbox" name="checkbox10" checked={formData.newDropdown === 'baumStrauchschnitt'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Baum und Strauchschnitt, Grünabfälle</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>11</p>
                            <input type="checkbox" id="checkbox11" className="myCheckbox" name="checkbox11" checked={formData.newDropdown === 'wurzelwerkStubben'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Wurzelwerk/Stubben</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>12</p>
                            <input type="checkbox" id="checkbox12" className="myCheckbox" name="checkbox12" checked={formData.newDropdown === 'dachpappeOhneTeer'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Dachpappe, ohne Teeranhaftung</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>13</p>
                            <input type="checkbox" id="checkbox13" className="myCheckbox" name="checkbox13" checked={formData.newDropdown === 'dachpappeMitTeer'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Dachpappe, mit Teeranhaftung (gefährlicher Abfall)</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>14</p>
                            <input type="checkbox"
                                id="checkbox14"
                                className="myCheckbox"
                                name="checkbox14"
                                checked={formData?.newDropdown?.toLowerCase() === 'asbest'}
                                onChange={handleCheckboxChange}
                            />
                            <span>Asbest (gefährlicher Abfall)</span>
                        </div>

                        <div className="checkboxContainer">
                            <p>15</p>
                            <input type="checkbox"
                                id="checkbox15"
                                className="myCheckbox"
                                name="checkbox15"
                                checked={formData?.newDropdown?.toLowerCase() === 'glas'}
                                readOnly
                                onChange={handleCheckboxChange}
                            />
                            <span>Glas</span>
                        </div>

                        <div className="checkboxContainer">
                            <p>16</p>
                            <input type="checkbox" id="checkbox16" className="myCheckbox" name="checkbox16" checked={formData.newDropdown === 'kunststoffFenster'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Fenster aus Kunststoff</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>16</p>
                            <input type="checkbox" id="checkbox17" className="myCheckbox" name="checkbox17" checked={formData.newDropdown === 'holzFenster'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Fenster aus Holz (gefährlicher Abfall)</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>18</p>
                            <input type="checkbox" id="checkbox18" className="myCheckbox" name="checkbox18" checked={formData.newDropdown === 'dämmwolle'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Dämmwolle</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>19</p>
                            <input type="checkbox" id="checkbox19" className="myCheckbox" name="checkbox19" checked={formData.newDropdown === 'kmfDämmwolle'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Dämmwolle (KMF - gefährlicher Abfall)</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>20</p>
                            <input type="checkbox" id="checkbox20" className="myCheckbox" name="checkbox20" checked={formData.newDropdown === 'styropor'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Styropor</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>21</p>
                            <input type="checkbox" id="checkbox21" className="myCheckbox" name="checkbox21" checked={formData.newDropdown === 'hbcdStyropor'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Styropor (HBCD haltig, gefährlicher Abfall)</span>
                        </div>
                        <div className="checkboxContainer">
                            <p>22</p>
                            <input type="checkbox" id="checkbox22" className="myCheckbox" name="checkbox22" checked={formData.newDropdown === 'rigips'}
                                readOnly
                                onChange={handleCheckboxChange} />
                            <span>Rigips</span>
                        </div>
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
                        <div className="icon-text" onClick={() => setMypages("Stepseven")}>
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
        </div>
    );
}