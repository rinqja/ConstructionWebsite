import React, { useEffect } from 'react'
import AboutBanner from './AboutBanner';
import AboutImage from './AboutImage';
import './AboutUs.scss';
import AboutUsContent from './AboutUsContent';
export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <AboutBanner/>
      <AboutImage/>
      <AboutUsContent/>
    </div>
  )
}
