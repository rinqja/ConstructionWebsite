import React from "react";
import "./HerzlichSection.scss";
import Image01 from "../../../assets/imges/1.png";
import Image02 from "../../../assets/imges/2.png";
import MobileTrckImage from "../../../assets/imges/mobile-truck.png";
import CapaWhite from "../../../assets/icons/capa-white.svg";
import CountUp from 'react-countup';

export default function HerzlichSection() {
  return (
    <div>
      <div className="herzlich-section-all-contnet-alignment">
        <div className="container-md2">
          <div className="grid">
            <div className="grid-items">
              <div>
                <div className="yellow-box animated-left-to-right">
                  <img src={CapaWhite} alt="CapaWhite"/>
                </div>
                <div className="mobile-view-show-image">
                  <img src={MobileTrckImage} alt="MobileTrckImage"/>
                </div>
              </div>
              <div className="image-style animated-paragraph">
                <img src={Image01} alt="Image01" />
              </div>
            </div>
            <div className="grid-items ">
              <div className="sec-image animated-right-to-left">
                <img src={Image02} alt="Image02" />
              </div>
              <div className="text">
                <h5  class="animated-paragraph">Lübber Erd- und Tiefbau</h5>
                <small  class="animated-paragraph">Herzlich willkommen!</small>
                <p class="animated-paragraph">
                  Lübber besteht seit 1937 und hat sich im Laufe der letzten
                  Jahrzehnte zu einem der führenden Unternehmen in der Erd- und
                  Tiefbaubranche für die Region Bremen und Niedersachsen
                  entwickelt. Angefangen als kleiner Familienbetrieb arbeiten
                  heute mehr als 50 Mitarbeiterinnen und Mitarbeiter für das
                  Unternehmen: Im Syker Firmenhauptsitz, auf unserem großen
                  Recyclingplatz in Weyhe oder auf einer der Baustellen unserer
                  Auftraggeber.
                </p>
                <p class="animated-paragraph">
                  Bei unserer Arbeit setzen wir sowohl auf die Erfahrung aus
                  über 80 Jahren Firmengeschichte als auch auf ständige
                  Weiterentwicklung — so arbeiten wir zum Beispiel daran, bei
                  der Ausführung unserer Aufträge möglichst ressourcenschonend
                  und nachhaltig vorzugehen. Außerdem legen wir großen Wert auf
                  ein gutes Betriebsklima, das sich durch familiären Umgang,
                  gute Kommunikation und Arbeit auf Augenhöhe definiert. Diese
                  Werte und eine teamorientierte Arbeitsweise machen uns zu
                  einem zuverlässigen und professionellen Partner für
                  Bauunternehmer, Architekten und Kommunen der Region.
                </p>
                <span  class="animated-paragraph">Niklas Franz</span>
              </div>
            </div>
          </div>
          <div className="text-content">
            <div>
            <h4>
            <CountUp duration={13} end={546} />
                </h4>
                <p>Angestellte</p>
            </div>
            <div>
              <h4>
            <CountUp duration={13} end={56} />
                </h4>
       
                <p>Standorte</p>
            </div>
            <div>
            <h4>
            <CountUp duration={13} end={237} />
                </h4>
                <p>Zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
