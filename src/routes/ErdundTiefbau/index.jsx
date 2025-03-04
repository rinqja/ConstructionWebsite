import React, { useEffect } from "react";
import "./ErdundTiefbau.scss";
import Image31 from "../../assets/imges/31.png";
import CommonSection from "../../components/CommonSection";
import ErdundTiefbauContent from "./ErdundTiefbauContent";


export default function ErdundTiefbau() {
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
            <p className="title">ERDBAU</p>
          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image31} alt="Image31" />
            </div>
            <div className="grid-items content-align">
              <div>
                <p className="animated-right-to-left">Wir bereiten den Boden für erfolgreiche Projekte</p>
                <span className="animated-right-to-left1">
                  Besonders im Erdbau können wir durch jahrzehntelange
                  Erfahrung und den entsprechenden Fuhr- und Maschinenpark auf
                  allen Ebenen unterstützen. Bereits bei der Planung eines
                  Projekts sind unsere Spezialisten gern in beratender Funktion
                  an Ihrer Seite. Der Umfang Ihres Bauvorhabens ist dabei egal —
                  unsere Logistik wurde im Laufe der Jahre so gestaltet, dass
                  Sie auch besonders große Bauprojekte effizient abbilden kann.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErdundTiefbauContent/>
      <CommonSection/>
    </div>
  );
}
