import React from 'react'
import './header.scss';
import Logo from '../../../assets/logo/dark-logo1.svg';
import TextFrame from '../../../assets/icons/capa2.svg';
import TextFrameMobile from '../../../assets/icons/mobile-text.svg';
import CapaFrame from '../../../assets/icons/Capa1.svg';
import CapaFrameMobile from '../../../assets/icons/mobile-capa.svg';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header>
        <div className='container-lga'>
          <div className='header-align'>
            <div className='header-logo'>
              <NavLink to="/">
              <img src={Logo} alt="Logo"/>
              </NavLink>
            </div>
            <div className='image-alignment'>
              <img src={CapaFrame} className="capa" alt="CapaFrame"/>
              <img src={TextFrame} className="text-frame" alt="TextFrame"/>
            </div>
            <div className='mobile-show'>
              <div className='mobile-image-alignment'>
                <img src={CapaFrameMobile} alt="CapaFrameMobile"/>
                <img src={TextFrameMobile} alt="TextFrameMobile"/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
