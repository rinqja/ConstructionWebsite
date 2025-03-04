import React from "react";
import "./ContainervermietungContent.scss";
import Arrow from "../../../assets/icons/arrow.svg";

export default function ContainervermietungContent() {
  return (
    <div>
      <div className="fuhrbetrieb-content-page-details-alignment">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h6>Containerarten, die wir <br/> vermieten</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                    Absetzcontainer mit einem Fassungsvermögen von 5 Kubikmetern
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Abrollcontainer mit einem Fassungsvermögen von 10 bis 38 Kubikmetern</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <h6>Sie haben Abfälle? Immer <br/> her damit!</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Bauschutt (Beton, Ziegel, Fliesen etc.)</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                    Bodenaushub
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                    Baustellenabfälle
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Holz</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Garten- und Parkabfälle</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Sonstige Abfälle auf Anfrage</span>
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
