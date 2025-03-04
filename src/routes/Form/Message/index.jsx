import React, { useState } from "react";
import "./Message.scss";
import { Link } from 'react-router-dom';

import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/imges/up.svg";

export default function Message({ mypages,setMypages, formData, setFormData, onMaterialChange,handleSubmitButton,steps }) {
  return (
    <div>
      <div className="welches-form-all-contnet-alignment">
        <div className="first">
          <div className="text">
            <p className="title">Vielen Dank für Ihre Anfrage.</p>
            <p style={{ fontSize: '18px', fontWeight: '400' ,paddingTop:"5px"}}>Wir werden uns in Kürze bei Ihnen melden.</p>  
            
<Link to="/">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img style={{ fontSize: '24px' ,paddingTop:"15px", paddingRight:"15px",paddingLeft:"25px"}} src={LeftIcon} alt="Left Icon" />
    <p style={{ fontSize: '24px' ,paddingTop:"15px"}}>Zurück zur Startseite</p>
  </div>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}