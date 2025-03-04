import React, { useEffect } from "react";
import "./SchüttgutundRecycling.scss";
import Image32 from "../../assets/imges/32.png";
import CommonSection from "../../components/CommonSection";
import ErdundTiefbauContent from "../ErdundTiefbau/ErdundTiefbauContent";
export default function SchüttgutundRecycling() {
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
          <p style={{ fontSize: '60px', fontWeight:"600" }}>SCHÜTTGUT UND RECYCLING</p>
          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image32} alt="Image32" />
            </div>
            <div className="grid-items content-align">
              <div>
                <p className="animated-right-to-left">Drehscheibe für Rohstoffe</p>
                <span  className="animated-right-to-left1">
                  Egal welche Form von Schüttgut Sie für Ihr Projekt benötigen —
                  bei uns werden Sie fündig. Auf unserem großen und gut
                  erreichbaren Recyclingplatz am Wieltdamm 1 in Weyhe (direkt an
                  der Autobahn) bekommen Sie Schüttgüter in beinahe jeder
                  beliebigen Menge und in allen Körnungsstufen: Angefangen bei
                  feinem Sand über groben Schotter und gesiebten Mutterboden bis
                  hin zu Kies in unterschiedlichsten Körnungen für Estrich oder
                  Fundamente. Darüber hinaus finden Sie bei uns Natursteine und
                  können Findlinge für eine individuelle Außengestaltung
                  bestellen.
                </span>
                <div className="new-space"></div>
                <p className="animated-right-to-left">…heißt Rohstoffe schonen</p>
                <span className="animated-right-to-left1">
                  Allein in Deutschland fallen jährlich fast 90 Millionen Tonnen
                  mineralischer Bauabfälle an. Als Unternehmen, das mit
                  endlichen Ressourcen arbeitet, sind wir uns unserer
                  Verantwortung gegenüber der Umwelt bewusst. Wir beschäftigen
                  uns daher schon lange mit dem Thema Recycling und arbeiten
                  dauerhaft daran, noch nachhaltiger zu werden: Durch
                  professionelle Aufbereitung werden so viele Materialien wie
                  möglich wiederverwertbar gemacht, Unbrauchbares wird
                  umweltgerecht entsorgt. Dabei arbeiten wir mit mobilen Brech-
                  und Siebanlagen. Und unser güteüberwachtes Recyclingmaterial
                  findet im Baugewerbe ein zweites Leben, indem es dort
                  wiederverwendet wird.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErdundTiefbauContent />
      <CommonSection />
    </div>
  );
}
