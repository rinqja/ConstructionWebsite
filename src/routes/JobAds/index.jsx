import React, { useEffect } from 'react'
import BewerbungModal from './BewerbungModal';
import BewerbungSubModal from './BewerbungSubModal';
import './JobAds.scss';
import JobAdsBanner from './JobAdsBanner';
export default function JobAds() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <JobAdsBanner/>
        {/* <BewerbungModal/>  */}
        {/* <BewerbungSubModal/> */}
    </div>
  )
}
