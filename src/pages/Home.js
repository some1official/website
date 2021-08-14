import React, { useState } from 'react';
import NavbarComponent from './../components/Navbar/NavbarComponent'
import './../style/pages/Home.css'
import WebFundamentalsCard from './../components/Cards/Learning Paths/WebFundamentals/WebFundamentalsCard'


//cards for featured tutorials grid
import PythonCard from './../components/Cards/Python/PythonCard'
import HtmlCard from './../components/Cards/Html/HtmlCard'
import LinuxCard from './../components/Cards/Linux/LinuxCard'
import LinuxAdminCard from './../components/Cards/Learning Paths/LinuxAdmin/LinuxAdminCard'
import PythonSoftwareEngineer from './../components/Cards/Learning Paths/PythonSoftwareEngineer/PythonSoftwareEngineer'

import Image1 from './../assets/image.gif'

import { FaCheck } from 'react-icons/fa'

import Typical from 'react-typical'


export default function Home() {

    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(true);
    }
    
    const onLeave = () => {
        setHover(false);
    }

    return (
        <>
            <NavbarComponent />

            <div
                style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "25%",
                    marginLeft: "25%"
                }}
            >   
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        top: "150px",
                        marginRight: "0%",
                        marginLeft: "0%"
                    }}
                >
                <h2
                    style={{
                        fontWeight: "bold",
                        fontFamily: "revert",
                        fontSize: "45px",
                        position: "relative",
                        top: "20px"
                    }}
                >Learn To</h2>
                <h1
                    style={{
                        fontWeight: "bold",
                        fontFamily: "revert",
                        fontSize: "55px"
                    }}
                >
                    <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Program',
                            1250,
                            'Hack',
                            1250,
                            'Think.',
                            3000
                        ]}
                    />
                </h1>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            top: "-15px"
                        }}
                    >
                        <p style={{color: "rgb(187, 187, 187)", fontStyle: "italic", marginBottom: "1%"}}> <FaCheck style={{color: "#7da80a"}}/> Beginner Friendly</p>
                        <p style={{color: "rgb(187, 187, 187)", fontStyle: "italic", marginTop: "0px"}}> <FaCheck style={{color: "#7da80a"}}/> Courses, Challenges & Certificates</p>
                        
                        {/* 
                        One Button, the hover in css was not working and I did it in react, 
                        which works but it is a really fking bad practice idk what tf I am doing 
                        2021/08/13
                        */}

                        <div
                            onMouseEnter={onHover}
                            onMouseLeave={onLeave}
                        >
                            {hover ? 
                        <button
                            className="button1-home"
                            style={{
                                color: "white",
                                backgroundColor: "#688b06",
                                border: "#688b06",
                                borderRadius: "50px",
                                padding: "0.5rem 1.5rem",
                                fontFamily: "revert",
                                fontStyle: "italic",
                            }}
                        >
                            <a href="/login"
                                style={{textDecoration: "none"}}
                            >
                            Join for FREE
                            </a>
                        </button> : /* Its a if statment in React this button for hover thingy */
                        <button
                            className="button1-home"
                            style={{
                                color: "white",
                                backgroundColor: "#7da80a",
                                border: "#7da80a",
                                borderRadius: "50px",
                                padding: "0.5rem 1.5rem",
                                fontFamily: "revert",
                                fontStyle: "italic",
                            }}
                        >
                            <a href="/login"
                                style={{textDecoration: "none"}}
                            >
                            Join for FREE
                            </a>
                        </button>
                        }
                        </div>

                        {/*The Button ends here*/}

                    </div>
                </div>
                <img 
                    src={Image1}
                    height="400px"
                    style={{marginLeft: "10%",marginRight: "5%", position: "relative",top: "60px"}}
                />
            </div>
            
            {/*Section 1*/}

            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    marginRight: "25%",
                    marginLeft: "25%",
                    position: "relative",
                    top: "100px"
                }}
            >
                <h1
                    style={{
                        fontFamily: "Source Code Pro, monospace"
                    }}
                >Learning Paths</h1>
                <p style={{color: "rgb(187, 187, 187)", fontStyle: "italic", marginBottom: "1%"}}>
                    Learn by following structured paths
                </p>

                <div className="featured-tutorials-grid">
                    <div className="featured-tutorials-grid-card"><WebFundamentalsCard /></div>
                    <div className="featured-tutorials-grid-card"><LinuxAdminCard /></div>
                    <div className="featured-tutorials-grid-card"><PythonSoftwareEngineer /></div>
                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            

            <section className="featured-tutorials-grid">
                <div className="featured-tutorials-grid-card"> <PythonCard/> </div>
                <div className="featured-tutorials-grid-card"> <HtmlCard/> </div>
                <div className="featured-tutorials-grid-card"> <LinuxCard/> </div>
            </section>

            
        </>
    )
}
