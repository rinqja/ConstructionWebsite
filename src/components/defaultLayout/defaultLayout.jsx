import React from 'react'
import Footer from '../Footer'
export default function DefaultLayout({ children }) {
    return (
        <>

            {children}
            <Footer/>
        </>
    )
}
