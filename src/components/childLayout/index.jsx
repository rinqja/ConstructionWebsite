import React from 'react'
import Footer from '../Footer'
import Header from '../layout/header/header'
import Subheader from '../Subheader'
export default function ChildLayout({children}) {
  return (
    <div>
      <Header/>
      <Subheader/>
        {children}
            <Footer/>
    </div>
  )
}
