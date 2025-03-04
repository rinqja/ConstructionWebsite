import React from "react";
import "./AbbrucharbeitenText.scss";
import Arrow from "../../../assets/icons/arrow.svg";

export default function AbbrucharbeitenText() {
  return (
    <div>
      <div className="abbruchar-beitenText-page-details-alignment">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h6>Abbrucharbeiten</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Abriss von Fundamenten</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Abriss von Massivbauwerken</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Abriss von Industrieanlagen</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Entkernung von Gebäuden</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      Rückbau von Windkraftanlagen inklusive Fundamenten
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <h6>
                Fachgerechte <br /> Entsorgung
              </h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>
                      Reinigungs- und <br /> Aufräumarbeiten
                    </span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Trennung und Recycling von Bauschutt und Holz</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Trennung und Recycling von Schrott und Metallen</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Fachgerechte Asbest-Entsorgung</span>
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
