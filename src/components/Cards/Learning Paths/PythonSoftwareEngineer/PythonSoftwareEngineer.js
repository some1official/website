import React from 'react'

import './PythonSoftwareEngineer.css'

import WebFundamentals from './../../../../assets/logos/PythonLogo.png'

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
                    Python Software Engineer
                </h4>

                <p className="description-PythonCard">
                    Learn the basics of Python and the tools used by software engineers.
                    
                    <ul className="ul-WebFundamentalsCard">
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Python Fundamentals</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Python Projects</div>
                        </li>
                        <li style={{color: "#7da80a"}} className="li-WebFundamentalsCard">
                            <div style={{color: "#C5C5C5"}}>Popular Programming Tools</div>
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
