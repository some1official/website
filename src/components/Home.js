import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import NavigationBar from './Navbar/index';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import style from './../stylesheet/Home.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Linux from './../assets/icons/linux.png';

export default function Home() {
    
    const { currentUser } = useAuth()

    return (
        <>
            <NavigationBar />

            <h2 className="headline-text">Learn Programming</h2>
            <p className="headline-subtext">For Free</p>


            <div className="courses-categories" style={{width: '100%', padding: '40px'}} >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{backgroundColor:'#525252'}}>
                            <img style={{position:'relative', marginTop:'auto', marginLeft:'auto', textAlign:'center'}} src = {Linux} width="100" height="100" />
                            <h2 style={{color: 'white', position:'relative', textAlign:'center'}}>Introduction</h2>
                            <h3>To Linux</h3>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper >1/2 Size</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}