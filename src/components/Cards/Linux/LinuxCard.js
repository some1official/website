import React from 'react'

import './../../../style/components/Cards/Linux/base.css'
import './../../../style/components/Cards/Linux/LinuxCard.css'

import LinuxLogo from './../../../assets/logos/LinuxLogo.png'

export default function LinuxCard() {
    return (
        <div className="card-LinuxCard">
            <div className="card-contents-LinuxCard">
                
                <img 
                    src={LinuxLogo} 
                    height={125}
                    className="logo-LinuxCard" 
                    alt="Logo Linux"
                />
                
                <h4 className="title-LinuxCard">
                    Linux
                </h4>

                <p className="description-LinuxCard">
                    Learn the fundamentals of Linux, the built-in tools
                </p>

                <a 
                    href="/"
                    className="button-LinuxCard"
                >
                    <div className="button-text-LinuxCard">
                        Learn Linux
                    </div>
                </a>
                
            </div>
        </div>
    )
}
