import React, { useEffect, useState } from "react";
import "./Projects.scss";
import CompletedProjects from "./CompletedProjects";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import { ApiGet } from "../../API/ApiData";

export default function Projects() {
  const [activeDot, setActiveDot] = useState(0);
  const [projectOneData, setProjectOneData] = useState([]);
  console.log("activeDot", activeDot);
  
  const getProjectOne = () => {
    ApiGet("/banner?search=aktuelle").then((res) => {
      console.log("res", res.data.data.getBanner?.[0]?.data);
      setProjectOneData(res.data.data.getBanner?.[0]?.data);
    });
  };

  useEffect(() => {
    getProjectOne();
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "up" && activeDot > 0) {
      setActiveDot(activeDot - 1);
    } else if (direction === "down" && activeDot < projectOneData?.length - 1) {
      setActiveDot(activeDot + 1);
    }
  };



  return (
    <div className="projects-all-contnet-alignment">
      <div className="container-md8">
        
        {projectOneData?.length > 0 && (
          <>
            <div className="text">
              <Rotate top left>
                <h4>Aktuelle Projekte</h4>
              </Rotate>
            </div>

            <div className="grid">
              {/* Large Image */}
              <div className="grid-items">
                <div className="lg-image">
                  <Fade left>
                    <img
                      src={
                        projectOneData &&
                        projectOneData?.[activeDot]?.main_image
                      }
                      alt="Project"
                    />
                  </Fade>
                </div>
              </div>

              {/* Project Title and Text */}
              <Fade right cascade>
                <div className="grid-items background-text">
                  <h3 className="project-title">
                    {projectOneData && projectOneData?.[activeDot]?.title}
                  </h3>
                  <p className="project-text">
                    {projectOneData && projectOneData?.[activeDot]?.description}
                  </p>
                </div>
              </Fade>
              <div className="grid-items images ">
                <div class="upper-part">
                  <img
                    src={
                      projectOneData &&
                      projectOneData?.[activeDot]?.secondary_image
                    }
                    alt="Project"
                  />
                </div>
                <div class="lower-part">
                  <img
                    src={
                      projectOneData && projectOneData?.[activeDot]?.third_image
                    }
                    alt="Project"
                  />
                </div>
              </div>

              {/* Dot Navigation */}

              <div className="grid-items" style={{ display: 'grid' }}>
                <div className="dot-navigation">
                  <span
                    className="arrow up-arrow"
                    onClick={() => handleArrowClick("up")}
                  >
                    {" "}
                    <i class="fa-solid fa-arrow-up desktop-icon"></i>
                    <i class="fa-solid fa-arrow-left mobile-icon"></i>
                  </span>
                  {projectOneData &&
                    projectOneData?.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${activeDot === index ? "active" : ""}`}
                        onClick={() => setActiveDot(index)}
                      ></span>
                    ))}
                  {/* Arrow Down */}
                  <span
                    className="arrow down-arrow"
                    onClick={() => handleArrowClick("down")}
                  >
                    <i class="fa-solid fa-arrow-down desktop-icon"></i>
                    <i class="fa-solid fa-arrow-right mobile-icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <CompletedProjects />
    </div>
  );
}
