import React from 'react'
import ProfilePic from './profile.gif'
import { Chip } from '@material-ui/core'
import { SiGithub } from 'react-icons/si'
import NavbarComponent from '../../components/Navbar/NavbarComponent'
import { GrInstagram } from 'react-icons/gr'
import './Timnik.css'

export default function Timnik() {
    return (
        <>
            <NavbarComponent />
            <div
                style={{
                    textAlign: "center",
                    marginTop: "3%",
                    
                }}
            >
                <img
                    src={ProfilePic}
                    style={{
                        borderRadius: "50%",
                        borderColor: 'green',
                        borderStyle: "solid"
                    }}
                    height={175}
                    

                />

            </div>
            <h1
                style={{
                    fontFamily: "Souce Code Pro, monospace",
                    textAlign: "center",
                    color: "white",
                    fontWeight: "lighter"
                }}
            >Timnik</h1>
            <div 
                style={{
                    textAlign: "center",
                    position: "relative",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center"
                }}
            >

                <div
                    style={{
                        marginRight: "2px",
                        marginLeft: "2px"
                    }}
                >
                    <Chip 
                            color="primary"
                            label="Teacher"
                    />  
                </div>
                <div
                    style={{
                        marginRight: "2px",
                        marginLeft: "2px"
                    }}
                >
                    <Chip 
                            color="white"
                            label="Founder"
                    />   
                </div>
                <div
                    style={{
                        marginRight: "2px",
                        marginLeft: "2px"
                    }}
                >
                    <Chip 
                            color="secondary"
                            label="Developer"
                    />    
                </div>
            </div>

            {
                /*
                    Social Media Accounts
                */
            }
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    top: "20px"
                }}
            >
                <div style={{color: "white", marginRight: "5px",marginLeft: "5px"}}>
                    <a className="badge-timnik" href="https://github.com/nottimnik/" target="_blank">
                        <SiGithub size={25}/>
                    </a>
                </div>
                <div style={{color: "white", marginRight: "5px",marginLeft: "5px"}}>
                    <a className="badge-timnik" href="https://www.instagram.com/nottimnik/" target="_blank">
                        <GrInstagram size={25}/>
                    </a>
                </div>
            </div>
        </>
    )
}
