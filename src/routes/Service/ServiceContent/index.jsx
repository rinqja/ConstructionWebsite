import React from "react";
import "./ServiceContent.scss";
import CardImage from '../../../assets/imges/16.png';
export default function ServiceContent() {
  return (
    <div>
      <div className="service-all-content-page-alignment">
        <div className="container-md6">
          <div className="text">
          <p style={{ fontSize: '60px', fontWeight:"600" }}>TIEFBAU(KANAL- UND PFLASTERARBEITEN)</p>
          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
                <img src={CardImage} alt="CardImage"/>
            </div>
            <div className="grid-items">
              <p className="animated-right-to-left">Damit alles glatt läuft</p>
              <span className="animated-right-to-left1">
                Wir sind sowohl für öffentliche als auch für private Arbeitgeber
                im Bereich des Kanalbaus tätig. Dabei übernehmen wir die
                fachgerechte Neuverlegung oder Teilsanierung von Regen- und
                Schmutzwasserkanälen. Auch das Legen von Hausanschlüssen oder
                die Erschließung kompletter Neubaugebiete ist für uns kein
                Problem.
              </span>
              <span className="animated-right-to-left1">
                Für Pflasterarbeiten haben wir ebenfalls die passenden Profis,
                um Sie tatkräftig zu unterstützen. Abhängig von der Größe des
                Objekts verlegen wir entweder von Hand oder mit leistungsstarken
                Verlegemaschinen. Egal ob einzelnes Bauvorhaben,
                Gewerbeimmobilien oder das gesamte Baugebiet — wir sind Ihr
                Partner für eine professionelle und optisch ansprechende
                Pflasterung!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
