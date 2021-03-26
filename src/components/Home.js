import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../assets/images/logo.transparent.png'
import { Link, useHistory, BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import NavigationBar from './Navbar/index';
import { render } from '@testing-library/react';
import { Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function Home() {
    
    const { currentUser } = useAuth()
    
    return (

        <NavigationBar />
    )
}