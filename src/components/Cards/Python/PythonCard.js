import React from 'react'

import './../../../style/components/Cards/Python/base.css'
import './../../../style/components/Cards/Python/PythonCard.css'

import PythonLogo from './../../../assets/logos/PythonLogo.png'

export default function PythonCard() {
    return (
        <div className="card-PythonCard">
            <div className="card-contents-PythonCard">
                
                <img 
                    src={PythonLogo} 
                    height={125}
                    className="logo-PythonCard" 
                    alt="Logo Python"
                />
                
                <h4 className="title-PythonCard">
                    Python 3
                </h4>

                <p className="description-PythonCard">
                    One of the most popular and used programming languages in the world.
                </p>

                <a 
                    href="/"
                    className="button-PythonCard"
                >
                    <div className="button-text-PythonCard">
                        Learn Python
                    </div>
                </a>
                
            </div>
        </div>
    )
}
