import React, { useEffect } from 'react'
import BegleitenSection from './BegleitenSection'
import Cardsection from './Cardsection'
import Herobanner from './Herobanner'
import HerzlichSection from './HerzlichSection'
import UnsereDienstleistungen from './UnsereDienstleistungen'

export default function Home() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <Herobanner/>
      <HerzlichSection/>
      <Cardsection/>
      <UnsereDienstleistungen/>
      <BegleitenSection/>
    </div>
  )
}
