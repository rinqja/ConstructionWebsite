import "./AboutUsContent.scss";
import Image1 from "../../../assets/imges/teamf.svg";
import Image2 from "../../../assets/imges/team33.svg";
import Image3 from "../../../assets/imges/teamw.svg";
import Image4 from "../../../assets/imges/team11.svg";
import Image5 from "../../../assets/imges/05.png";
import Image6 from "../../../assets/imges/06.png";
import GridIcon from "../../../assets/icons/grid.svg";
import Image7 from "../../../assets/imges/teamgri2.jpg";
import Fade from 'react-reveal/Fade';
import Rotate from "react-reveal/Rotate";
import { useState } from "react";

export default function AboutUsContent() {
 
 

  const imageTexts = {
    Image1: {
      department: "Die Familie ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    Image2: {
      department: "Backoffice",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    Image3: {
      department: "Werkstatt",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    Image4: {
      department: "Tiefbau",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    }
  };
  const [toogle, setToogle] = useState(true); // Set initial st
const [activeImage, setActiveImage] = useState('Image1');
const [selectedImageText, setSelectedImageText] = useState(imageTexts['Image1']);
  const handleImageClick = (imageKey) => {
    // Hide the text first
    setToogle(false);

    setTimeout(() => {
      // Update the text
      setSelectedImageText(imageTexts[imageKey]);

      // Show the text with the new content
      setToogle(true);

      // Set the active image
      setActiveImage(imageKey);
      console.log('Active Image:', activeImage);
    }, 300); // The timeout should match the CSS transition duration
  };

  const handleWidthBoxClick = (e) => {
    e.stopPropagation(); // This stops the click event from reaching the grid-items
  };

  return (
    <div>
      <div className="about-us-content-all-page-alignment">
        <div className="container-md11">
          <div className="text-grid">
            <div className="text-grid-items">
              <div className="empty"></div>
            </div>
            <div className="text-grid-items">
              <Fade left>
                <h6>Über uns</h6>
              </Fade>
              <Fade right>
                <p>
                  Die Geschichte unseres Unternehmens beginnt 1937 mit dem Gründer
                  Fritz Lübber, der die Firma als KfZ-Fuhrbetrieb anmeldet und
                  anfangs nur den Transport von Gütern per LKW anbietet. Der
                  Betrieb entwickelt sich allerdings schnell weiter, es kommen
                  neue Geschäftszweige und die ersten Mitarbeiterinnen und
                  Mitarbeiter dazu.
                </p>
                <p>
                  Heute, über 80 Jahre später, arbeitet bereits die vierte
                  Generation der Familie Lübber im Unternehmen und sorgt so dafür,
                  dass wir nach wie vor ein Familienbetrieb sind — wenn auch
                  deutlich größer als zur Gründungszeit. Trotz unseres Wachstums
                  sind die Werte unseres Unternehmens die gleichen geblieben: Auf
                  allen Ebenen des Betriebs setzen wir auf ein gutes, familiäres
                  Miteinander und die Arbeit im Team. So konnten wir im Laufe der
                  Jahre bereits zahlreiche große Projekte erfolgreich umsetzen und
                  haben uns zu einem der führenden Erd- und Tiefbauunternehmen in
                  der Region entwickelt.
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="container-md12">
          <div className="grid">
            <div className="grid-items">
              <div className="image-grid">
                <div className="image-grid-items" onClick={() => handleImageClick('Image1')}>
                
                    <img
                      src={Image1}
                      alt="Image1"
                      className={activeImage === 'Image1' ? 'active' : ''}
                    />
                 
                </div>
                <div className="image-grid-items" onClick={() => handleImageClick('Image2')}>
           
                    <img
                      src={Image2}
                      alt="Image2"
                      className={activeImage === 'Image2' ? 'active' : ''}
                    />
                 
                </div>
                <div className="image-grid-items" onClick={() => handleImageClick('Image3')}>
                 
                    <img
                      src={Image3}
                      alt="Image3"
                      className={activeImage === 'Image3' ? 'active' : ''}
                    />
                 
                </div>
                <div className="image-grid-items" onClick={() => handleImageClick('Image4')}>
                 
                    <img
                      src={Image4}
                      alt="Image4"
                      className={activeImage === 'Image4' ? 'active' : ''}
                    />
                 
                </div>
              </div>
            </div>
            <div className="grid-items" onClick={() => setToogle(!toogle)}>
              <div className="new-icon"></div>
              <div className={`card-details ${toogle ? "show" : "hide"}`}>
                <div className="width-box" onClick={handleWidthBoxClick}>
                  {selectedImageText && (
                    <>
                      <p className="department ">{selectedImageText.department}</p>
                      <p>{selectedImageText.description}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iframe">
          <div className="container-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5135195.579509613!2d5.17695037688684!3d51.06380172616637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a721ec2b1be6b%3A0x75e85d6b8e91e55b!2sGermany!5e0!3m2!1sen!2sin!4v1684326074945!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
