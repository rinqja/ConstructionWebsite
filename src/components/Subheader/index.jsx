import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Subheader.scss";
import Subbar from '../../routes/Service/Subbar'; // Make sure this path is correct

export default function Subheader() {
  const [showSubbar, setShowSubbar] = useState(false);

  return (
    <>
      <div className="sub-header-alignment">
        <div className="container-lgas">
          <div className="text-style">
            {/* Add onMouseEnter to show Subbar when hovered */}
            <div  className="angebotediv" onMouseEnter={() => setShowSubbar(true)}>
            <NavLink to="/service" activeClassName="active-link">Angebot</NavLink>
            </div>
            <NavLink to="/job-ads">Karriere</NavLink>
            <NavLink to="/about-us">Über uns</NavLink>
            <a href="#footer-grid">Kontakt</a>
            <NavLink to="/projects">Referenzen</NavLink>
          </div>
        </div>
      </div>

      {/* Render Subbar outside and add onMouseLeave to hide when not hovered */}
      {showSubbar && (
        <div onMouseLeave={() => setShowSubbar(false)}>
          <Subbar />
        </div>
      )}
    </>
  );
}
