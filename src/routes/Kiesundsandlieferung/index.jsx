import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./kiesundsandlieferung.scss";
import Image28 from "../../assets/imges/sandandtruck.png";
import RightIcon from "../../assets/icons/right-sm.svg";
import FuhrbetriebContent from "./kiescontent";
import CommonSection from "../../components/CommonSection";

export default function Fuhrbetrieb() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <div className="new-repeat-section-design">
        <div className="container-md6">
          <div className="text">
          <p style={{ fontSize: '60px', fontWeight:"600" }}>Kies und sandlieferung</p>

          </div>
          <div className="grid">
            <div className="grid-items">
              <img src={Image28} alt="Image28" />
            </div>
            <div className="grid-items space">
              <p>Versierte Logistik für starke Geräte</p>
              <span>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque voluptatum autem nostrum eaque magni velit quas eveniet? Dolor molestias aliquid dicta laboriosam perspiciatis! Nemo odio ex fuga, fugit libero repellendus.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae a, esse dolorem harum ipsam ipsa magnam blanditiis saepe nemo numquam non id, in molestiae recusandae officiis cumque labore nisi.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md6">
      <div className="genetator-content" >
</div>
      </div>
      <FuhrbetriebContent/>
      <CommonSection/>
    </div>
  );
}
