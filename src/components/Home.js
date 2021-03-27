import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import NavigationBar from './Navbar/index';
import Grid from '@material-ui/core';
import style from './../stylesheet/Home.css';


export default function Home() {
    
    const { currentUser } = useAuth()
    
    return (
        <>
            <NavigationBar />

            <h2 className="headline-text">Learn Programming</h2>
            <p className="headline-subtext">For Free</p>
        </>
    )
}