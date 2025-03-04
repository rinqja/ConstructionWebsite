import React, { useEffect } from "react";
import "../../../styles/animations.scss"
import Image32 from "../../assets/imges/34.png";
import CommonSection from "../../components/CommonSection";
import ErdundTiefbauContent from "../ErdundTiefbau/ErdundTiefbauContent";
export default function Straßenreinigung() {
  useEffect(() => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, 0); // Adjust time as needed
}, []);
  return (
    <div>
      <div className="new-repeat-section-design" id>
        <div className="container-md6">
          <div className="text">
          <p style={{ fontSize: '60px', fontWeight:"600" }}>STRAßENREINIGUNG</p>
          </div>
          <div className="grid">
            <div className="grid-items animated-paragraph">
              <img src={Image32} alt="Image32" />
            </div>
            <div className="grid-items content-align animated-right-to-left ">
              <div>
                <p className="animated-right-to-left">Damit alles glatt läuft</p>
                <span className="animated-right-to-left1">
                  Egal ob größeres Bauprojekt oder die Entrümpelung des
                  Eigenheims, Container können für die unterschiedlichsten
                  Vorhaben hilfreich sein. Unabhängig davon, wie groß die
                  Schutt- und Abfallmengen sind, die Sie entsorgen wollen, wir
                  unterstützen Sie gern mit den Leihcontainern unseres
                  Containerdienstes - zuverlässig und zu fairen Preisen. Wir
                  verfügen über diverse Spezial-LKWs, die die Container direkt
                  zu Ihnen bringen und im Anschluss gefüllt wieder abholen. Und
                  auch für die Entsorgung sind wir im Anschluss da: Unsere
                  Fahrer werden jährlich im Umgang mit Abfällen geschult, sodass
                  Sie sich keine Sorgen um eine fachgerechte und umweltschonende
                  Beseitigung Ihres übrig gebliebenen Bauschutts machen müssen.
                </span>
                <div className="new-space"></div>
                <p  className="animated-right-to-left">…heißt Rohstoffe schonen</p>
                <span  className="animated-right-to-left1">
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
