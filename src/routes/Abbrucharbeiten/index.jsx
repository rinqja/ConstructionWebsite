import React, { useEffect } from "react";
import "./Abbrucharbeiten.scss";
import Image27 from "../../assets/imges/27.png";
import AbbrucharbeitenText from "./AbbrucharbeitenText";
import CommonSection from "../../components/CommonSection";
export default function Abbrucharbeiten() {
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
          <p style={{ fontSize: '60px', fontWeight:"600" }}>ABBRUCHARBEITEN</p>

          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image27} alt="Image27" />
            </div>
            <div className="grid-items">
              <p className="animated-right-to-left">Abrissarbeiten gehören in Expertenhände</p>
              <span className="animated-right-to-left1">
                Bevor Bauvorhaben realisiert werden können, ist im Vorfeld
                häufig ein Abriss erforderlich. Als zertifizierter Partner für
                Abbruch und Recycling sind wir auch bei dieser Aufgabe zur
                Stelle und führen für Sie die Arbeit an Gebäuden jeglicher Art
                und Größe aus. Bei der Sortierung und Trennung des Abbruchgutes
                gehen wir
              </span>
              <span className="animated-right-to-left1"> 
                verantwortungsvoll gegenüber der Umwelt vor und orientieren uns
                selbstverständlich immer an der aktuellen Abfallverordnung. Auch
                bei Abtransport und Entsorgung können Sie sich auf uns
                verlassen: Durch ausgebildete Abbruchspezialisten, unseren Fuhr-
                und Maschinenpark und unseren eigenen Recyclingplatz sorgen wir
                für einen effizienten und professionellen Gebäudeabbruch.
              </span>
            </div>
          </div>
        </div>
      </div>
      <AbbrucharbeitenText/>
      <CommonSection/>
    </div>
  );
}
