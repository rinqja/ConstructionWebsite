import React from 'react'
import  './BegleitenSection.scss';
import CardImage013 from '../../../assets/imges/13.png';
import CardImage014 from '../../../assets/imges/14.png';
import LgRightIcon from '../../../assets/icons/lg-right.svg';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import  Rotate  from 'react-reveal/Rotate';
export default function BegleitenSection() {
  return (
    <div>
        <div className='begleiten-section-all-contnet-alignment'>
            <div className='container-md5'>
                <div className='grid'>
                    <div className='grid-items'>
                    <Slide left>
                        <h6>Begleiten Sie uns</h6>
                        </Slide>
                        <NavLink to="/job-ads">
                        <Slide left>
                        <div className='icon-text'>
                            <div>
                                <img src={LgRightIcon} alt="LgRightIcon"/>
                            </div>
                            <div>
                                <p>Informieren Sie sich über die Stellenangebote, die wir für Sie haben</p>
                            </div>
                        </div>
                        </Slide>
                        </NavLink>
                        <div className='two-col-grid'>
                            <Rotate bottom right>
                            <div className='two-col-grid-items'>
                                <img src={CardImage014} alt="CardImage014"/>
                            </div>
                            </Rotate>
                            <Rotate bottom left>
                            <div className='two-col-grid-items'></div>
                            </Rotate>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <Fade right> 
                        <div className='image-style'>
                            <img src={CardImage013} alt='CardImage013'/>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
