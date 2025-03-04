import React from 'react'
import './Subbar.scss';
export default function Subbar() {
  return (
    <div>
        <div className='service-sub-bar'>
            <div className='center-div'>
                <div className='content'>
                    <a href="/fuhrbetrieb">FUHRBETRIEB</a>
                    <a href='/erdbau'>ERDBAU</a>
                    <a href='/abbrucharbeiten'>Abbrucharbeiten</a>
                    <a href='/service'>TIEFBAU (KANAL- UND PFLASTERARBEITEN)</a>
                    <a href="schüttgut-und-recycling">Schüttgut und Recycling</a>
                    {/* <a href='/kiesundsandlieferung'>Kies- und Sandlieferung</a> */}
                    <a href='/containervermietung'>CONTAINERDIENST</a>
                    <a href='/straßenreinigung'>Straßenreinigung</a>
                  {/* <a href=""></a>  Write the next name here */}
                </div>
            </div>
        </div>
    </div>
  )
}
