import React from 'react';
import Navbar from './../Navbar/index';
import style from './../../stylesheet/courses/login.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Login() {
    return (
        <>
            <Navbar />

            <div className="title">
                <h1>Create an Account for <span className="free">free</span>.</h1>
                <h3>Get Access To All the Courses for <span className="free">free</span>.</h3>
            </div>

            <div className="buttons">
                <Link to="/login">
                    <Button size="lg" className="button1" variant="success">Log In</Button>
                </Link>
                {' '}
                <Link to="/signup">
                    <Button size="lg" className="button2" variant="primary">Sign Up</Button>
                </Link>
            </div>

            <div className="quote">
                <h3 className="quote-message" >"Share your knowledge. It is a</h3>
                <h3 className="quote-message" >way to achieve immortality."</h3>
                <h4 className="author">Dalai Lama XIV</h4>
            </div>

            
            
        </>
    )
}
