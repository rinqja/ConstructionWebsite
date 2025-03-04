import React from "react";
import "./kiescontent.scss";
import Arrow from "../../../assets/icons/arrow.svg";

export default function kiesContent() {

  return (
    <div>
      <div className="fuhrbetrieb-content-page-details-alignment">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h6>kiesContenEN</h6>
              <p>kies und sandlieferung</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    {/* the text here needs to be modified later because as of right now there is nothing that I can do */}
                    <span>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit, placeat,
                      totam quo culpa illum dolorum exercitationem a quos doloribus id maiores obcaecati excepturi
                       dolor modi nobis. Alias, commodi corrupti?
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>TIEFBAU(KANAL- UND PFLASTERARBEITEN)</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      Transport und asdasdasd asd ad asdasdqasda
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
