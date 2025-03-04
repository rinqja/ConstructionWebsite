import React from 'react'
import './CommonSection.scss';
import { useLocation } from 'react-router-dom';

import Image18 from '../../assets/imges/18.png';
import Image19 from '../../assets/imges/19.png';
import Image20 from '../../assets/imges/20.png';
import Image21 from '../../assets/imges/21.png';
import Image22 from '../../assets/imges/22.png';
import Image23 from '../../assets/imges/23.png';
import Image24 from '../../assets/imges/24.png';
import Image25 from '../../assets/imges/25.png';
import Image26 from '../../assets/imges/26.png';
import Image27 from "../../assets/imges/9.png"
import { NavLink } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import  Fade  from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function CommonSection() {
    const location = useLocation();
    const currentPath = decodeURI(location.pathname);
  
  return (
    <div>
        <div className='common-section-all-contnet-alignment'>
            <div className='image-grid'>
                <div className='image-grid-items'>
                    <img src={Image18} alt="Image18"/>
                    <div className='blue-div'></div>
                </div>
                <div className='image-grid-items'>
                    <img src={Image19} alt="Image19"/>
                    <div className='blue-div'></div>
                </div>
                <div className='image-grid-items'>
                    <img src={Image19} alt="Image19"/>
                    <div className='blue-div'></div>
                </div>
                <div className='image-grid-items'>
                    <img src={Image20} alt="Image20"/>
                    <div className='blue-div'></div>
                </div>
            </div>
            <div className='container-md3'>
                <div className='top-bottom-alignment'>
                    <div className='grid'>
                    {currentPath !== "/erdbau" && (
                  <Slide left>
                    <div className='grid-items'>
                    <NavLink to="/erdbau">
                  <span>ERDBAU</span>
                <div className='image'>
                 <img src={Image21} alt="Image21"/>
               </div>
               
                 </NavLink>
                               </div></Slide>
                      )}

                      {currentPath !== "/abbrucharbeiten" && (
                        <Fade top>
                      <div className='grid-items'>
                        <NavLink to="/abbrucharbeiten">
                          <span>ABBRUCHARBEITEN</span>
                          <div className='image'>
                            <img src={Image22} alt="Image22"/>
                          </div>
                        
                        </NavLink>
                      </div>
                      
                        </Fade>
                    )}
                         {currentPath !== "/fuhrbetrieb" && (
                          <Slide right>
                      <div className='grid-items'>
                        <NavLink to="/fuhrbetrieb">
                          <span>FUHRBETRIEB</span>
                          <div className='image'>
                            <img src={Image23} alt="Image23"/>
                          </div>
                        </NavLink>
                      </div>
                      </Slide>
                    )}
                        {currentPath !== "/schüttgut-und-recycling" && (
                          
                          <Slide left>
                      <div className='grid-items'>
                        <NavLink to="/schüttgut-und-recycling">
                          <span>SCHÜTTGÜTER UND RECYCLING</span>
                          <div className='image'>
                            <img src={Image24} alt="Image24"/>
                          </div>
                        </NavLink>
                      </div></Slide>
                    )}
                     {currentPath !== "/service" && (
                      <Fade top>
                      <div className='grid-items'>
                        <NavLink to="/service">
                          <span>TIEFBAU (KANAL- UND PFLASTERARBEITEN)</span>
                          <div className='image'>
                            <img src={Image27} alt="Image24"/>
                          </div>
                        </NavLink>
                      </div>
                      </Fade>
                      
                    )}
                       {/* {currentPath !== "/kiesundsandlieferung" && (
                      <div className='grid-items'>
                        <NavLink to="/kiesundsandlieferung">
                          <span>KIES- UND SANDLIEFERUNG</span>
                          <div className='image'>
                            <img src={Image23} alt="Image23"/>
                          </div>
                        </NavLink>
                      </div>
                    )} */}
                         {currentPath !== "/containervermietung" && (
                          <Fade bottom>
                      <div className='grid-items'>
                        <NavLink to="/containervermietung">
                          <span>Containerdienst</span>
                          <div className='image'>
                            <img src={Image25} alt="Image25"/>
                          </div>
                        </NavLink>
                      </div></Fade>
                    )}
                       
                           {currentPath !== "/straßenreinigung" && (
                            <Slide right>
                      <div className='grid-items'>
                        <NavLink to="/straßenreinigung">
                          <span>STRASSENREINIGUNG</span>
                          <div className='image'>
                            <img src={Image26} alt="Image26"/>
                          </div>
                        </NavLink>
                      </div></Slide>
                    )}
                
                  </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
