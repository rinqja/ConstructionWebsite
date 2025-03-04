import React from 'react';
import './Herobanner.scss';
import HeroImage from '../../../assets/imges/lubberteam.jpg';
import Logo from '../../../assets/logo/logo.svg';
import TextFrame from '../../../assets/icons/text-frame.png';
import { NavLink } from 'react-router-dom';
import NewImage from "../../../assets/imges/onlinesh.svg";

export default function Herobanner() {
    return (
        <>
            <div className='hero-image'>
                <div className='image'>
               <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
    <iframe
    src="https://player.vimeo.com/video/937765914?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1"
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
    title="Luebber_16_9_website">
</iframe>
</div>
                </div>
                <div className='w-full'>
                    <div className='container-lg'>
                        <div className='depart'></div>
                    </div>
                </div>
                <div className='header-style'>
                    <div className='container-lg'>
                        <div className='header-alignment'>
                            <div className='logo'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='text'>
                                <a href="/onlineshop">
                                    <img src={NewImage} alt="New Image" className="new-image-class" />
                                </a>
                                <img src={TextFrame} alt="TextFrame" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu-bar'>
                <div className='container-lg'>
                    <div className='text-style'>
                        <a href="#ourservices">Angebot</a>
                        <NavLink to="/job-ads">Karriere</NavLink>
                        <NavLink to="/about-us">Über uns</NavLink>
                        <a href="#footer-grid">Kontakt</a>
                        <NavLink to="/projects">Referenzen</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}