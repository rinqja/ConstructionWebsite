import React from "react";
import "./FuhrbetriebContent.scss";
import Arrow from "../../../assets/icons/arrow.svg";

export default function FuhrbetriebContent() {
  return (
    <div>
      <div className="fuhrbetrieb-content-page-details-alignment">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h6>Fuhrbetrieb</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      Transport von Schüttgütern wie Sand, Kies, Körnung, Boden,
                      Mineralgemisch, Recycling, Beton, Bauschutt und
                      Abbruchmaterialien
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Transport von Baumaschinen</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      Transport und fachgerechte Entsorgung von belasteten Böden
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Einsatz unserer Kehrmaschine</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <h6>Fahrzeuge</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>3-Achser Sattelzüge mit schlammdichter Mulde</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      2- und 3-Achser Allradzüge, zum Teil mit Tandem
                      (beplanbar)
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      3-Achser Tieflader für Maschinentransporte aller Art
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>3-Achser Abrollkipper, 2-Achser Absetzkipper</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Kehrmaschine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
