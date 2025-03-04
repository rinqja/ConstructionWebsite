import React from 'react'
import FormFooter from '../FormFooter'

export default function FormLayout({children}) {
  return (
    <div>
        {children}
        <FormFooter/>
    </div>
  )
}
