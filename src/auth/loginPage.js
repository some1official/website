import React from 'react'
import { Button , Card } from 'react-bootstrap'
import { SiGithub, SiGoogle, SiFacebook } from 'react-icons/si'
import { FaFacebook } from 'react-icons/fa'
import { GitHubProvider } from '../configs/authMethods'
import socialMediaAuth from './auth'
import './loginPage.css'

export default function loginPage() {
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };
    
    return (
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card style={{ width: '23rem',backgroundColor: "#151a21" ,height: '25rem', borderRadius: "5%"}}>
                <div style={{marginTop: "7%",marginLeft: "5%", marginRight: "5%", marginBottom: "5%"}}>
                    <div style={{textAlign: "center"}}>
                    <h1 style={{color: "white"}}>Welcome!</h1>
                    <p style={{color: "white"}}>By logging in you accept our Privacy Policy and Terms of Service.</p>
                    
                    <div style={{marginTop: "5%"}}>
                    <Button 
                        className="loginPage-button"
                        variant="light"
                        onClick={() => handleOnClick(GitHubProvider)}
                        style={{
                            borderRadius: "12px",
                            padding: "1rem 4rem",
                            border: "white"
                        }}
                    >
                        Log in with Github <SiGithub/>
                    </Button>
                    <Button 
                        className="loginPage-button"
                        variant="light"
                        onClick={() => handleOnClick(GitHubProvider)}
                        style={{
                            borderRadius: "12px",
                            padding: "1rem 4rem",
                            marginTop: "1rem",
                            border: "white"
                        }}
                    >
                        Log in with Google <SiGoogle/>
                    </Button>
                    <Button 
                        className="loginPage-button"
                        variant="light"
                        onClick={() => handleOnClick(GitHubProvider)}
                        style={{
                            borderRadius: "12px",
                            padding: "1rem 3.5rem",
                            marginTop: "1rem",
                            border: "white"
                        }}
                    >
                        Log in with Facebook <FaFacebook/>
                    </Button>
                    </div>
                    </div>
                </div>
                </Card>
                
            </div>
        </div>
    )
}
