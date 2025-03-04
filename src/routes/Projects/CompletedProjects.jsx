import React, { useEffect, useState } from "react";
import "./CompletedProjects.scss";
import "./Projects.scss";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import { ApiGet } from "../../API/ApiData";

const CompletedProjects = () => {
  
  const [activeDot, setActiveDot] = useState(0);
  const [projectOneData, setProjectOneData] = useState([]);
  console.log("activeDot", activeDot);
  const getProjectOne = () => {
    ApiGet("/banner?search=abgeschlossene").then((res) => {
      console.log("res", res.data.data.getBanner?.[0]?.data);
      setProjectOneData(res.data.data.getBanner?.[0]?.data);
    });
  };

  useEffect(() => {
    getProjectOne();
  }, []);

  const handleArrowClick = (direction) => {
    if (direction === "up" && activeDot > 0) {
      setActiveDot(activeDot - 1);
    } else if (direction === "down" && activeDot < projectOneData?.length - 1) {
      setActiveDot(activeDot + 1);
    }
  };

  return (
    <div>
      <div className="container-md8">
      {projectOneData?.length > 0 && (
        <>
        <div className="text">
          <Rotate top left>
            <h4>Abgeschlossene Projekte</h4>
          </Rotate>
        </div>
        
          <div className="grid1">
            <div className="grid-items2">
              <div className="dot-navigation1">
                <span
                  className="arrow1 up-arrow"
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
                      className={`dot1 ${activeDot === index ? "active" : ""}`}
                      onClick={() => setActiveDot(index)}
                    ></span>
                  ))}
                {/* Arrow Down */}
                <span
                  className="arrow1 down-arrow"
                  onClick={() => handleArrowClick("down")}
                >
                  <i class="fa-solid fa-arrow-down desktop-icon"></i>
                  <i class="fa-solid fa-arrow-right mobile-icon"></i>
                </span>
              </div>
            </div>

            {/* Project Title and Text */}
            <Fade left cascade>
              <div className="grid-items2 images">
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
            </Fade>
            <div className="grid-items background-text1">
              <h3 className="project-title">
                {projectOneData && projectOneData?.[activeDot]?.title}
              </h3>
              <p className="project-text">
                {projectOneData && projectOneData?.[activeDot]?.description}
              </p>
            </div>
            <div className="grid-items1">
              <div className="project-image">
                <Fade right>
                  <img
                    src={
                      projectOneData && projectOneData?.[activeDot]?.main_image
                    }
                    alt="Project"
                  />
                </Fade>
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompletedProjects;
