import React from 'react'

import './WebFundamentals.css'

import WebFundamentals from './../../../../assets/badges/WebFundamentals.png'

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
                        height={125}
                        width={125}
                        className="logo-PythonCard" 
                        alt="Logo Python"
                    />
                </div>
                
                <h4 className="title-PythonCard">
                    Web Fundamentals
                </h4>

                <p className="description-PythonCard">
                    Learn how the web works and how websites are being created
                    
                    <ul className="ul-WebFundamentalsCard">
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Web Fundamentals</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Basic HTML, CSS & JavaScript</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Web Vulnerabilities Explained</div>
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
