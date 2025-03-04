import React from "react";
import { useRef,useState, useEffect} from "react";
import "./UnsereDienstleistungen.scss";
import CardImage06 from "../../../assets/imges/6.png";
import CardImage07 from "../../../assets/imges/7.png";
import CardImage08 from "../../../assets/imges/8.png";
import CardImage09 from "../../../assets/imges/9.png";
import CardImage010 from "../../../assets/imges/10.png";
import CardImage011 from "../../../assets/imges/11.png";
import CardImage012 from "../../../assets/imges/12.png";
import CardImage014 from "../../../assets/imges/31.svg";
import CardImage013 from "../../../assets/imges/30.svg";
import  Fade  from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
import  Rotate  from "react-reveal/Rotate";
import Zoom from "react-reveal/Zoom";

export default function UnsereDienstleistungen() {
  const ref = useRef([]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      setVisibleIndexes(prevIndexes => [...prevIndexes, ref.current.indexOf(entry.target)]);
                  }
              });
          }, 
          { threshold: 0.3 }
      );
  
      // Observe elements
      ref.current.forEach(elem => {
          if (elem) observer.observe(elem);
      });
  
      // Cleanup function
      return () => {
          ref.current.forEach(elem => {
              if (elem) observer.unobserve(elem);
          });
      };
  }, []);
  return (
    <div>
      <div className="unsere-dienstleistungen-section-all-contnet-alignment">
        <div className="container-new">
          <div className="title" id="ourservices">
            <Zoom top>
            <h5>Unsere Dienstleistungen</h5>
            </Zoom>
          </div>
          <div className="grid">
          <div className={`grid-items ${visibleIndexes.includes(0) ? 'animated-left-to-right' : ''}`}
              ref={el => ref.current[0] = el}>
              <NavLink to="/fuhrbetrieb ">
                <span>FUHRBETRIEB</span>
                <div className="image">
                  <img src={CardImage06} alt="CardImage06" />
                </div>
              </NavLink>
            </div>

            <div className={`grid-items ${visibleIndexes.includes(0) ? 'animated-paragraph' : ''}`}
              ref={el => ref.current[0] = el}>
              <NavLink to="/erdbau">
                <span>ERDBAU</span>
                <div className="image">
                  <img src={CardImage07} alt="CardImage07" />
                </div>
              </NavLink>
            </div>

            <div className={`grid-items ${visibleIndexes.includes(0) ? 'animated-right-to-left' : ''}`}
              ref={el => ref.current[0] = el}>
              <NavLink to="/abbrucharbeiten">
                <span>ABBRUCHARBEITEN</span>
                <div className="image">
                  <img src={CardImage08} alt="CardImage08" />
                </div>
              </NavLink>
            </div>

           <Fade left>
            <div className="grid-items">
              <span>TIEFBAU (KANAL- UND PFLASTERARBEITEN)</span>
              <div className="image">
                <img src={CardImage09} alt="CardImage09" />
              </div>
            </div>
            </Fade>
          
           <Fade bottom>
            <div className="grid-items">
              <NavLink to="/containervermietung">
                <span>CONTAINERDIENST</span>
                <div className="image">
                  <img src={CardImage013} alt="CardImage011" />
                </div>
              </NavLink>
            </div>
            </Fade>
            <Fade right>
               <div className="grid-items">
              <NavLink to="/schüttgut-und-recycling">
                <span>SCHÜTTGÜTER UND RECYCLING</span>
                <div className="image">
                  <img src={CardImage014} alt="CardImage011" />
                </div>
              </NavLink>
            </div>
            </Fade>
            <Rotate top left>
            <div className="grid-items">
              <span></span>
              <div className="image">
              
              </div>
            </div>
            </Rotate>
            <Fade top> 
            <div className="grid-items">
              <NavLink to="/straßenreinigung">
                <span>STRAßENREINIGUNG</span>
                <div className="image">
                  <img src={CardImage012} alt="CardImage012" />
                </div>
              </NavLink>
            </div>
            </Fade>

           <Rotate top right >
            <div className="grid-items"></div>
</Rotate>
          </div>
        </div>
      </div>
    </div>
  );
}
