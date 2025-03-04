import React from "react";
import "./Cardsection.scss";
import Slider from "react-slick";

import Icon01 from "../../../assets/icons/1.svg";
import Icon02 from "../../../assets/icons/2.svg";
import Icon03 from "../../../assets/icons/3.svg";
import Image04 from "../../../assets/imges/1937.png";
import Image05 from "../../../assets/imges/1945.png";
import Image005 from "../../../assets/imges/1960.png";
import Image006 from "../../../assets/imges/1937.png";
import Image007 from "../../../assets/imges/007.png";
import LightLogo from "../../../assets/logo/light-logo.svg";
import { useState } from "react";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className="right-arrow-design"
    onClick={onClick}
  >
    <i class="fa-solid fa-arrow-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="left-arrow-design"
      onClick={onClick}
    >
       <i class="fa-solid fa-arrow-left"></i>
      </div>
  );
}


export default function Cardsection() {
  const [ card  , setCard ] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };
  return (
    <div>
      <div className="home-card-section-all-contnet-alignment">
        <div className="container-md3 ">
          <div className="grid">
             <Rotate top left>
            <div className="grid-items">
             
              <div className="icon-alignment">
                <img src={Icon01} alt="Icon01" />
              </div>
              <h4>TRADITION</h4>
              <p>
                Der Vorteil eines so langjährigen Unternehmens sind nicht nur
                die wertvollen Geschäftserfahrungen — es sind vor allem die
                gemeinsamen Werte und Beziehungen, die im Laufe der Zeit
                entstehen und von Generation zu Generation weitergegeben werden,
                um die Basis für neue Ideen und eine starke Weiterentwicklung zu
                bilden.
              </p>
            </div>
            </Rotate>
            <Fade top>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon02} alt="Icon02" />
              </div>
              <h4>FLEXIBILITÄT</h4>
              <p>
                Besonders im Baugewerbe ist eine gewisse Flexibilität gefragt -
                Bedingungen können sich kurzfristig ändern, sodass logistische
                Prozesse neu angepasst werden müssen. Durch unseren eigenen
                Lager- und Recyclingplatz in Weyhe und eine ausgeklügelte
                Logistik können wir auf solche Veränderungen schnell und
                zuverlässig reagieren und auch anspruchsvolle Liefertermine
                realisieren. So bleiben nicht nur wir, sondern auch unsere
                Auftraggeber flexibel.
              </p>
            </div>
            </Fade>
            <Rotate top right>
            <div className="grid-items">
              <div className="icon-alignment">
                <img src={Icon03} alt="Icon03" />
              </div>
              <h4>VIELSEITIGKEIT</h4>
              <p>
                Weil wir ebenfalls ein zertifizierter Entsorgungsfachbetrieb
                sind, können wir bei jedem Schritt eines Bauprojekts
                unterstützen: Wir übernehmen die Vorbereitung der Baustelle, den
                Transport von benötigten Baustoffen, Abbrucharbeiten, das
                Ausheben von Gruben, führen Kanal- und Pflasterarbeiten aus und
                kümmern uns zum Schluss um die Entsorgung des anfallenden
                Bauschutts. Egal, wie Ihr Projekt aussieht — bei uns bekommen
                Sie alles aus einer Hand.
              </p>
            </div>
             </Rotate> 
          </div>
        </div>
      </div>
      <div className="home-three-col-card">
        <Slider {...settings}>
          <div>
            <div className="grid-items" onClick={()=> setCard(1)}>
              <div className="card-image">
                <img src={Image04} alt="Image04" />
              </div>
              <div className="light-logo">
                <img src={LightLogo} alt="LightLogo" />
              </div>
              <div className={ card == 1 ? "details active-card" : "details"}>
                <div className="spacer">
                  <h6>1937</h6>
                  <p>
                    Gründer Fritz Lübbers meldet das Unternehmen am 25.10.1937
                    offiziell als KfZ-Fuhrbetrieb an und nimmt den Transport von
                    Gütern aller Art auf — dieser erfolgt anfangs noch per
                    Traktor mit zwei Anhängern, bald jedoch mit dem ersten LKW.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-items" onClick={()=> setCard(2)}>
            <div className="card-image">
              <img src={Image05} alt="Image05" />
            </div>
            <div className="light-logo">
              <img src={LightLogo} alt="LightLogo" />
            </div>
            <div className={ card == 2 ? "details active-card" : "details"}>
              <div className="spacer">
                <h6>1945</h6>
                <p>
                  Der Beginn der Nachkriegszeit und dem Wiederaufbau stellt
                  Deutschland vor große Herausforderungen. Innerhalb des
                  Unternehmens wird entschieden, auch im Fernverkehr tätig zu
                  werden, überwiegend mit Zementtransporten.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-items" onClick={()=> setCard(3)}>
            <div className="card-image">
              <img src={Image005} alt="Image005" />
            </div>
            <div className="light-logo">
              <img src={LightLogo} alt="LightLogo" />
            </div>
            <div className={ card == 3 ? "details active-card" : "details"}>
              <div className="spacer">
                <h6>1960</h6>
                <p>
                  Fritz Lübbers geht nach über 20 Jahren in den wohlverdienten
                  Ruhestand und übergibt die Firma in die Hände seines Sohnes
                  Horst Lübber, der ab 1960 die Unternehmensleitung übernimmt.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-items" onClick={()=> setCard(4)}>
            <div className="card-image">
              <img src={Image006} alt="Image006" />
            </div>
            <div className="light-logo">
              <img src={LightLogo} alt="LightLogo" />
            </div>
            <div className={ card == 4 ? "details active-card" : "details"}>
              <div className="spacer">
                <h6>1984</h6>
                <p>
                  Schwiegersohn Reiner Franz und Ehefrau beziehungsweise Tochter
                  Gabriele Lübber-Franz treten in das Unternehmen ein und
                  koordinieren gemeinsam mit einem Büroteam den Einsatz von
                  Fahrzeugen und Mitarbeitern.
                </p>
              </div>
            </div>
          </div>
          <div className="grid-items" onClick={()=> setCard(5)}>
            <div className="card-image">
              <img src={Image007} alt="Image007" />
            </div>
            <div className="light-logo">
              <img src={LightLogo} alt="LightLogo" />
            </div>
            <div className={ card == 5 ? "details active-card" : "details"}>
              <div className="spacer">
                <h6>1990</h6>
                <p>
                  Mit den Zwillingen Joost und Niklas Franz tritt bereits die
                  vierte Generation der Familie Lübbers ins Unternehmen ein.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
