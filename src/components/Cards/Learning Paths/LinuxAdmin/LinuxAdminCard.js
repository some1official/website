import React from 'react'

import './LinuxAdminCard.css'

import WebFundamentals from './../../../../assets/badges/linuxAdmin.png'

export default function WebFundamentalsCard() {
    return (
        <>
        <div className="card-PythonCard">
            <div className="card-contents-PythonCard">
                <div style={{position: "relative",top:"20px"}}>
                <div
                    style={{
                        display:"flex",
                        justifyContent:"center"
                    }}
                >
                    <img 
                        src={WebFundamentals} 
                        height={150}
                        width={150}
                        className="logo-PythonCard" 
                        alt="Logo Python"
                    />
                </div>
                
                <h4 className="title-PythonCard">
                    Linux Fundamentals
                </h4>

                <p className="description-PythonCard">
                    Learn how to become a power user of the operating system linux
                    
                    <ul className="ul-WebFundamentalsCard">
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Basic Linux Commands</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>System Maintenance</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Bash Scripting</div>
                        </li>
                    </ul>
                </p>
                </div>
                <a 
                    style={{
                        position: "relative",
                        top: "-50px"
                    }}
                    href="/tutorials/python/intro"
                    className="button-PythonCard"
                >
                    <div className="button-text-PythonCard">
                        Learn Web
                    </div>
                </a>
                
            </div>
        </div>
        </>
    )
}
