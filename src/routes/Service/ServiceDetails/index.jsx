import React from "react";
import "./ServiceDetails.scss";
import Arrow from "../../../assets/icons/arrow.svg";
export default function ServiceDetails() {
  return (
    <div>
      <div className="service-page-details-alignment">
        <div className="container-md6">
          <div className="grid">
            <div className="grid-items">
              <h6>Kanalbau</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Entwässerungsarbeiten</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Radlader- und Baggerarbeiten</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Erd- und Planierungsarbeiten</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-items">
              <h6>Pflasterarbeiten</h6>
              <p>Unsere Leistungen im Überblick:</p>
              <div className="all-icon-text">
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Natursteinverlegung</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Großflächige Pflasterungen (z.B. Parkplätze)</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Hofeinfahrten, Garagenzufahrten</span>
                  </div>
                </div>
                <div className="icon-text">
                  <div>
                    <img src={Arrow} alt="Arrow" />
                  </div>
                  <div>
                    <span>Wege und Straßen</span>
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
