import React from 'react'
import './../../style/components/Navbar/NavbarComponent.css'
import PrivateRoute from './../../auth/PrivateRoute'

export default function NavbarComponent() {
    return (
        <>
            <ul className="NavbarComponent-ul">
                <li className="NavbarComponent-li">
                    <a 
                        href="/template"
                        className="NavbarComponent-a"    
                    >
                        SOME1
                    </a>
                </li>   
                <li className="NavbarComponent-li">
                    <a 
                        href="/"
                        className="NavbarComponent-a"    
                    >
                        SOME1
                    </a>
                </li>
                <li className="NavbarComponent-li">
                    <a 
                        href="/"
                        className="NavbarComponent-a"    
                    >
                        SOME1
                    </a>
                </li>
                <li className="NavbarComponent-li" style={{float: "right"}}>
                    {/*Some of the css is the specific css file*/}
                    {
                        PrivateRoute ?
                        <button
                            className="button-NavbarComponent"
                            style={{
                                borderRadius: "100px",
                                backgroundColor: "#04AA6D",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "15px",

                                "&:hover": {
                                    backgroundColor: "#008a57"
                                }
                            }}
                        >
                            <a 
                            href="/dashboard"
                            className="NavbarComponent-a"    
                            >
                            Dashboard
                            </a>
                        
                        </button>
                        :   
                        <button
                            className="button-NavbarComponent"
                            style={{
                                borderRadius: "100px",
                                backgroundColor: "#04AA6D",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "15px",

                                "&:hover": {
                                    backgroundColor: "#008a57"
                                }
                            }}
                        > 
                            <a 
                            href="/login"
                            className="NavbarComponent-a"    
                            >
                            Log In
                            </a>
                        </button>
                    }
                </li>
            </ul>
        </>

    )
}
