import React, { useState } from "react";
import "./GewerblichForm.scss";
import RightIcon from "../../../assets/icons/right-sm.svg";
import { ApiPost } from "../../../API/ApiData";

export default function GewerblichForm(props) {
  const [type, setType] = useState('');

  const { setMypages, formData, setFormData } = props;
  const [formErrors, setFormErrors] = useState({});

  const [timePeriod, setTimePeriod] = useState(''); // 'Vormittag' or 'Nachmittag'
  const [availableTimes, setAvailableTimes] = useState([]);
  const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  const handleTimePeriodChange = (e) => {
    const selectedPeriod = e.target.value;
    setTimePeriod(selectedPeriod);
  
    let times = [];
  
    if (selectedPeriod === 'Vormittag') {
      // Generate times from 07:00 to 11:30 in half-hour increments
      for (let hour = 7; hour < 12; hour++) {
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        times.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    } else if (selectedPeriod === 'Nachmittag') {
      // Generate times from 12:00 to 16:00 in half-hour increments
      for (let hour = 12; hour <= 16; hour++) {
        times.push(`${hour.toString().padStart(2, '0')}:00`);
        if (hour < 16) { // Avoid adding 16:30
          times.push(`${hour.toString().padStart(2, '0')}:30`);
        }
      }
    }
  
    setAvailableTimes(times);
    // Reset selected time if the period changes
    setFormData({ ...formData, time: '' });
  };
  

  const handleFieldDetails = (e) => {
    const { name, value } = e.target;
    
    // Only update 'type' state if the 'type' select dropdown was changed
    if (name === "type") {
      setType(value);
    }
    
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };
  const handleNextData = () => {
    let errors = {};

    if (!formData.type) {
      errors.type = "Gewerblich oder privat? ist erforderlich.";
    }

    // Validate input fields based on type
    if (type === "Gewerblich") {
      if (!formData.firmenname) {
        errors.firmenname = "Firmenname ist erforderlich.";
      }
      if (!formData.strasse) {
        errors.strasse = "Straße ist erforderlich.";
      }
      if (!formData.plz) {
        errors.plz = "PLZ ist erforderlich.";
      }
      if (!formData.ort) {
        errors.ort = "Ort ist erforderlich.";
      }
    } else if (type === "Privat") {
      if (!formData.firstName) {
        errors.firstName = "Vorname ist erforderlich.";
      }
      if (!formData.lastName) {
        errors.lastName = "Nachname ist erforderlich.";
      }
    }

    // Common validations
    if (!formData.date) {
      errors.date = "Datum ist erforderlich.";
    }
    if (!timePeriod) {
      errors.timePeriod = "Zeitraum ist erforderlich."; // Add a new error message for the time period field
    }
    if (!formData.time) {
      errors.time = "Uhrzeit ist erforderlich.";
    }
    if (!formData.address) {
      errors.address = "Adresse ist erforderlich.";
    }
    if (!formData.billingAddress) {
      errors.billingAddress = "Rechnungsadresse ist erforderlich.";
    }
    if (!formData.emailAddress) {
      errors.emailAddress = "E-Mail ist erforderlich.";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Telefonnummer ist erforderlich.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setMypages("Steptwo");
    }
  };

  return (
    <div>
      <div className="gewer-blich-form">
      <div className="text">
          <span>Gewerblich oder privat?</span>
        </div>
        <div className="input input-bottom">
          <select value={type} onChange={handleFieldDetails} name="type">
            <option value="" disabled selected>eine Option auswählen</option>
            <option value="Gewerblich">Gewerblich</option>
            <option value="Privat">Privat</option>
          </select>
          {formErrors.type && <span className="error-message">{formErrors.type}</span>}
        </div>

     
{type === "Gewerblich" && (
  <>
    <div className="input input-bottom">
      <input
        type="text"
        placeholder="Firmenname"
        name="firmenname"
        value={formData.firmenname || ''}
        onChange={handleFieldDetails}
      />
      {formErrors.firmenname && <span className="error-message">{formErrors.firmenname}</span>}
    </div>
    <div className="input input-bottom">
      <input
        type="text"
        placeholder="Straße"
        name="strasse"
        value={formData.strasse || ''}
        onChange={handleFieldDetails}
      />
      {formErrors.strasse && <span className="error-message">{formErrors.strasse}</span>}
    </div>
    <div className="two-col-grid">
      <div className="input">
        <input
          type="text"
          placeholder="PLZ"
          name="plz"
          value={formData.plz || ''}
          onChange={handleFieldDetails}
        />
        {formErrors.plz && <span className="error-message">{formErrors.plz}</span>}
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Ort"
          name="ort"
          value={formData.ort || ''}
          onChange={handleFieldDetails}
        />
        {formErrors.ort && <span className="error-message">{formErrors.ort}</span>}
      </div>
    </div>
  </>
)}

        {type === "Privat" && (
          <>
            <div className="input input-bottom">
              <input type="text" placeholder="Vorname" name="firstName" value={formData.firstName || ''} onChange={handleFieldDetails} />
              {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
            </div>
            <div className="input input-bottom">
              <input type="text" placeholder="Nachname" name="lastName" value={formData.lastName || ''} onChange={handleFieldDetails} />
              {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
            </div>
          </>
        )}
        <div className="two-col-grid">
          <div className="input">
          <input
  type="date"
  placeholder="Datum"
  name="date"
  min={formattedDate}
  value={formData.date}
  onChange={(e) => handleFieldDetails(e)}
/>
            {formErrors.date && <span className="error-message">{formErrors.date}</span>}
          </div>
          <div className="input ">
  <select value={timePeriod} onChange={handleTimePeriodChange} name="timePeriod">
    <option value="" disabled>Tageszeit</option>
    <option value="Vormittag">Vormittag</option>
    <option value="Nachmittag">Nachmittag</option>
  </select>
  {formErrors.timePeriod && <span className="error-message">{formErrors.timePeriod}</span>}
</div>
        </div>
        {timePeriod ? (
  // Render this dropdown when a time period is selected ('Vormittag' or 'Nachmittag')
  <div className="input input-bottom">
    <select
      value={formData.time}
      onChange={(e) => handleFieldDetails(e)}
      name="time"
    >
      <option value="" disabled>Uhrzeit auswählen</option>
      {availableTimes.map(time => (
        <option key={time} value={time}>{time}</option>
      ))}
    </select>
    {formErrors.time && <span className="error-message">{formErrors.time}</span>}
  </div>
) : (
  // Optional: Render a placeholder or disabled input if no time period is selected
  <div className="input input-bottom">
    <select disabled>
      <option>Bitte zuerst Tageszeit auswählen</option>
    </select>
  </div>
)}
        <div className="input input-bottom">
          <input
            type="text"
            placeholder="Lieferadresse "
            name="address"
            value={formData.address}
            onChange={(e) => handleFieldDetails(e)}
          />
          {formErrors.address && <span className="error-message">{formErrors.address}</span>}
        </div>
        <div className="input input-bottom">
          <input
            type="text"
            placeholder="Rechnungsadresse"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={(e) => handleFieldDetails(e)}
          />
          {formErrors.billingAddress && <span className="error-message">{formErrors.billingAddress}</span>}
        </div>
        <div className="child-text">
          <span>Kontaktdaten</span>
        </div>
        <div className="input input-bottom">
          <input
            type="text"
            placeholder="E-Mail"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={(e) => handleFieldDetails(e)}
          />
          {formErrors.emailAddress && <span className="error-message">{formErrors.emailAddress}</span>}
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Telefonnummer"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleFieldDetails(e)}
          />
          {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
        </div>
        <div
          className="icon-text"
          onClick={() => {
            // setMypages("Steptwo");
            handleNextData();
          }}
        >
          <span>Weiter</span>
          <img src={RightIcon} alt="RightIcon" />
        </div>
      </div>
    </div>
  );
}
