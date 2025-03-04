import React, { useEffect } from 'react'
import CommonSection from '../../components/CommonSection';
import './Service.scss';
import ServiceContent from './ServiceContent';
import ServiceDetails from './ServiceDetails';
import Subbar from './Subbar';
export default function Service() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      
        <ServiceContent/>
        <ServiceDetails/>
        <CommonSection/>
    </div>
  )
}
