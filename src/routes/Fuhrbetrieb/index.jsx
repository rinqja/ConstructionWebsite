import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Fuhrbetrieb.scss";
import Image28 from "../../assets/imges/28.png";
import RightIcon from "../../assets/icons/right-sm.svg";
import FuhrbetriebContent from "./FuhrbetriebContent";
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
          <p style={{ fontSize: '60px', fontWeight:"600" }}>FUHRBETRIEB</p>

          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image28} alt="Image28" />
            </div>
            <div className="grid-items space  ">
              <p className="animated-right-to-left">Versierte Logistik für starke Geräte</p>
              <span className="animated-right-to-left1">
                Der firmeneigene Fuhrpark umfasst aktuell rund 30 Fahrzeuge, die
                es uns ermöglichen, auch größere Erdmassen zu bewegen und
                zahlreiche Baustellen in der Region zuverlässig mit den
                benötigten Schüttgütern zu versorgen. Geht es um die
                fachgerechte Aufarbeitung und Entsorgung, kommt unser
                Maschinenpark zum Einsatz. Von Kehrmaschinen über Kettenbagger
                in diversen Größen, lasergesteuerte Raupen bis hin zu Radladern
                mit Wiegetechnik - wir haben garantiert die passende Maschine
                für jede Baustelle und Aufgabe.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-md6">
      <div className="genetator-content" onClick={() => navigate("/fuhrbetriebform", { state: { steps: 5 } })}>
    <span>Anfrage</span>
    <img src={RightIcon} alt="RightIcon"/>
</div>
      </div>
      <FuhrbetriebContent/>
      <CommonSection/>
    </div>
  );
}
