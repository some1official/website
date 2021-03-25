import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/images/logo.transparent.png'
import { Link, useHistory, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Navbar from './Navbar';

export default function Home() {
    
    const { currentUser } = useAuth()

    return (
        <Router>
            <Navbar />
        </Router>
    )
}
