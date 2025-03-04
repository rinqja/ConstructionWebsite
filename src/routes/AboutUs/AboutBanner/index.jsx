import React from 'react'
import './AboutBanner.scss';
import AboutBannerImage from '../../../assets/imges/about-banner.png';
export default function AboutBanner() {
  return (
    <div>
        <div className='about-banner-all-content-alignment'>
            <div className='container-md9'>
                <div className='grid'>
                    <div className='grid-items'>
                        <h1>
                        Lübber Erd- und Tiefbau
                        </h1>
                        <p>
                        Erfahren Sie hier mehr über die Geschichte und Entwicklung unseres Unternehmens im Laufe der letzten acht Jahrzehnte.
                        </p>
                    </div>
                    <div className='grid-items'>
                        <img src={AboutBannerImage} alt="AboutBannerImage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
