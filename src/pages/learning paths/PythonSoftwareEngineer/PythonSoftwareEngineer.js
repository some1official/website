import React from 'react'

import './PythonSoftwareEngineer.css'
import PythonLogo from './../../../assets/logos/PythonLogo.png'

import NavbarComponent from '../../../components/Navbar/NavbarComponent'

export default function PythonSoftwareEngineer() {
    return (
        <>
            <NavbarComponent />
            <div
                style={{
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                    top: "50px"
                }}
            >
                <img 
                    src={PythonLogo} 
                    height={150}
                    style={{
                        position: "relative",
                        top: "-10px"
                    }}
                />
                <p 
                    style={{
                        color: "rgb(187, 187, 187)", 
                        fontStyle: "italic", 
                        marginBottom: "1%",
                        fontSize: "20px"
                    }}>
                    Learning Path
                </p>
                <h1
                    style={{
                        fontFamily: "Source Code Pro, monospace",
                        position: "relative",
                        top: "-10px"
                    }}
                >Python Software Engineer</h1>
            </div>

            {/* 
                Statistics about the Learning Path 
            */}
            
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    top: "20px"
                }}
            >

                {/*
                    Hours statistics
                */}

                <div
                    style={{
                        marginRight: "15px",
                        marginLeft: "15px"
                    }}
                >
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginBottom: "0px"
                        }}>
                        Hours Of Content
                    </p>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginTop: "10px",
                            color: "white"
                        }}>
                        16
                    </p>
                </div>

                {/*
                    Difficulty Statistics
                */}

                <div
                    style={{
                        marginRight: "15px",
                        marginLeft: "15px"
                    }}
                >
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginBottom: "0px"
                        }}>
                        Difficulty
                    </p>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginTop: "10px",
                            color: "#7da80a"
                        }}>
                        Easy
                    </p>
                </div>

                {/*
                    Sections Statistics
                */}

                <div
                    style={{
                        marginRight: "15px",
                        marginLeft: "15px"
                    }}
                >
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginBottom: "0px"
                        }}>
                        Sections
                    </p>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginTop: "10px",
                            color: "white"
                        }}>
                        5
                    </p>
                </div>

                {/*
                    Number of Tutorials Statistics
                */}

                <div
                    style={{
                        marginRight: "15px",
                        marginLeft: "15px"
                    }}
                >
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginBottom: "0px"
                        }}>
                        Tutorials
                    </p>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)" ,
                            marginBottom: "1%",
                            fontSize: "20px",
                            textAlign: "center",
                            marginTop: "10px",
                            color: "white"
                        }}>
                        35
                    </p>
                </div>
            </div>

            <br />
            <br />

            <hr 
                style={{
                    color: "white",
                    marginRight: "30%",
                    marginLeft: "30%",
                }} 
            />

            {/* 
                Section 1
            */}

            <div
                style={{
                    marginLeft: "30%",
                    marginRight: "30%"
                }}
            >
                <div>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)", 
                            marginBottom: "1%",
                            fontSize: "20px",
                            fontFamily: "Source Code Pro, monospace",
                            
                        }}>
                        Section 1
                    </p>
                    <h1
                        style={{
                            fontFamily: "Source Code Pro, monospace",
                            color: "white"
                        }}
                    >Python for Everybody</h1>
                </div>

                <ul 
                    style={{
                        color: 'white',
                        fontFamily: "Source Code Pro, monospace",
                        fontSize: "20px",
                        listStyleType: "none",
                    }}
                >
                    <li>00 - <a className="a-PythonSoftwareEngineer" href="/course/python/intro"> What is Python?</a> {"(Introduction)"}</li>
                    <li>01 - <a className="a-PythonSoftwareEngineer" href="/course/python/hello-world"> Hello, World</a></li>
                    <li>02 - <a className="a-PythonSoftwareEngineer" href="/course/python/variables"> Variables</a></li>
                </ul>

                <div>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)", 
                            marginBottom: "1%",
                            fontSize: "20px",
                            fontFamily: "Source Code Pro, monospace",
                            
                        }}>
                        Section 2
                    </p>
                    <h1
                        style={{
                            fontFamily: "Source Code Pro, monospace",
                            color: "white"
                        }}
                    >Popular Python Tools</h1>
                </div>
                <div>
                    <p 
                        style={{
                            color: "rgb(187, 187, 187)", 
                            marginBottom: "1%",
                            fontSize: "20px",
                            fontFamily: "Source Code Pro, monospace",
                            
                        }}>
                        Section 3
                    </p>
                    <h1
                        style={{
                            fontFamily: "Source Code Pro, monospace",
                            color: "white"
                        }}
                    >Python Projects</h1>
                </div>
            </div>
        </>
    )
}
