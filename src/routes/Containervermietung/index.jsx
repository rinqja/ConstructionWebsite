import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Image33 from "../../assets/imges/33.png";
import RightIcon from "../../assets/icons/right-sm.svg";
import CommonSection from "../../components/CommonSection";
import FuhrbetriebContent from "../Fuhrbetrieb/FuhrbetriebContent";
import ContainervermietungContent from "./ContainervermietungContent";
export default function Containervermietung() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
const navigate = useNavigate();
  return (
    <div>
      <div className="new-repeat-section-design">
        <div className="container-md6">
          <div className="text">
          <p  style={{ fontSize: '60px', fontWeight:"600" }}>CONTAINERDIENST</p>
          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image33} alt="Image33" />
            </div>
            <div className="grid-items content-align">
              <div>
                <p className="animated-right-to-left">
                  Bauschutt, Boden, Gartenabfälle & Co. fachgerecht entsorgen
                </p>
                <span className="animated-right-to-left1">
                  Ob Sie ein größeres Bauvorhaben planen oder einfach nur
                  gründlich entrümpeln wollen: Mit den Leihcontainern unseres
                  Containerdienstes bekommen Sie sowohl kleine als auch größere
                  Schutt- und Abfallmengen in den Griff – und das zu fairen
                  Preisen. Unser Containerdienst verfügt über diverse
                  Spezial-LKWs für den Transport von Containern. Unsere Fahrer
                  werden jedes Jahr im Umgang mit Abfall und Entsorgung
                  geschult. Auf diese Weise wird die Umwelt bestmöglich
                  geschont.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md6">
        <div className="genetator-content" onClick={() => navigate("/containerform")}>
        
          <span >Anfrage</span>
          <img src={RightIcon} alt="RightIcon" />
        </div>
      </div>
      <ContainervermietungContent />
      <CommonSection />
    </div>
  );
}
