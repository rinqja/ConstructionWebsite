import React, { useState } from "react";
import "./BehalterForm.scss";
import CopyIcon from "../../../assets/icons/copy.svg";
import RightIcon from "../../../assets/icons/right-sm.svg";
import LeftIcon from "../../../assets/icons/left-sm.svg";
import CloseIcon from "../../../assets/icons/close.svg";
import { toast } from "react-hot-toast";

export default function BehalterForm(props) {
  const { setMypages, formData, setFormData } = props;
  console.log("StepSix_props_", props);

  const [containers, setContainers] = useState([""]);
  const [counter, setCounter] = useState(1);
  const [selectedContainer, setSelectedContainer] = useState(null);

  const handleFieldDetails = (value, index) => {
    const list = [...containers];
    list[index] = value;
    setContainers(list);
    setSelectedContainer(value);
    // setFormData({ ...formData, containersSize: list });
  };

  const addContainer = () => {
    setContainers([...containers, ""]);
    setCounter(counter + 1);
  };

  const removeContainer = (index) => {
    const updatedContainers = containers.filter(
      (container, id) => index !== id
    );
    setContainers(updatedContainers);
  };

  return (
    <div>
      <div className="behalter-form-all-contnet-alignment">
        <div className="w-full">
          <div className="text">
            <span>Wie groß sind die Behälter?</span>
          </div>
          <div>
            {containers.map((container, index) => (
              <div key={index}>
                <div className="button-text">
                  <div className="container-close-wrapper">
                    <span>Behälter {index + 1}</span>
                    <div
                      className="close-wrapper"
                      onClick={() => removeContainer(index)}
                    >
                      <img src={CloseIcon} alt="CloseIcon" />
                    </div>
                  </div>
                  <div className="btn-align">
                    <button
                      className={container === "5 m³" && "selected-container"}
                      onClick={() => handleFieldDetails("5 m³", index)}
                    >
                      5 m³
                    </button>
                    <button
                      className={container === "10 m³" && "selected-container"}
                      onClick={() => handleFieldDetails("10 m³", index)}
                    >
                      10 m³
                    </button>
                    <button
                      className={container === "20 m³" && "selected-container"}
                      onClick={() => handleFieldDetails("20 m³", index)}
                    >
                      20 m³
                    </button>
                    <button
                      className={container === "36 m³" && "selected-container"}
                      onClick={() => handleFieldDetails("36 m³", index)}
                    >
                      36 m³
                    </button>
                  </div>
                  <p>
                    Behälter{" "}
                    <b>
                      {index + 1} - {container}{" "}
                    </b>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="copy-button">
            <button onClick={addContainer}>
              <span>Weiteren Behälter hinzufügen</span>
              <img src={CopyIcon} alt="CopyIcon" />
            </button>
          </div>
          <div className="two-button-alignment">
            <div className="icon-text" onClick={() => setMypages("Stepfive")}>
              <img src={LeftIcon} alt="LeftIcon" />
              <span>Zurück</span>
            </div>
            <div
              className="icon-text"
              onClick={() => {
                if (selectedContainer !== null) {
                  setMypages("Stepseven");
                  setFormData({ ...formData, containersSize: containers });
                } else {
                  toast.error("Please select a container size.");
                }
              }}
            >
              <span>Weiter</span>
              <img src={RightIcon} alt="RightIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
