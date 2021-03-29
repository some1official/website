import React from 'react'
import Navbar from './../Navbar/index'
import './../../stylesheet/courses/main.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Linux from './../../assets/icons/linux.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cpp from './../../assets/icons/cpp.png';

export default function Main() {

    const cppDesc = "Learn the fundamentals of C++,\nFunctional Programming and Object Oriented Programing.\nOnce you have the fundamentals down,\nyou'll apply that knowledge by creating algorithms.";

    return (
        <>
            <Navbar />

            <div className="popular-courses">
                <h2 className="popular-courses-title">🔥 Popular Courses</h2>
                <Grid container justify = "center" style={{ padding: '40px', }}>
                    <Grid item xs={12} sm={3}>
                        <Paper variant="outlined" className="popular-courses-grid1" style={{backgroundColor:'#555555' }}>
                            <img className="linux-image" style={{position:'relative', marginTop:'auto', marginLeft:'auto', textAlign:'center'}} src = {Linux} alt="Linux Image"/>
                            <h2 className="linux-title1" style={{color: 'white', position:'relative', textAlign:'center'}}>Introduction</h2>
                            <h3 className="linux-title2">To Linux</h3>
                            <p className="linux-desc">Learn the fundamentals of linux.</p>
                            <div className="linux-button">
                                <Link to="/courses/introduction-to-linux">
                                    <Button variant="success" style={{fontWeight:'bold'}}>Start</Button>
                                </Link>
                            </div>

                            <div className="linux-tags">
                                <Link className="linux-tag1" to = "tags/linux">#linux</Link>
                                <Link className="linux-tag2" to = "tags/linux">#beginner</Link>
                            </div>
                            <p> </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper variant="outlined" className="popular-courses-grid2" style={{backgroundColor:'#555555' }}>
                            <p> </p>
                            <img className="cpp-image" style={{position:'relative', marginTop:'auto', marginLeft:'auto', textAlign:'center'}} src = {Cpp} alt="Linux Image"/>
                            <p> </p>
                            <h2 className="cpp-title1" style={{color: 'white', position:'relative', textAlign:'center'}}>C++ Algorithms</h2>
                            <h3 className="cpp-title2">& Data Structures</h3>
                            <p className="cpp-desc">{cppDesc}</p>

                            <div className="linux-button">
                                <Link to="/courses/introduction-to-linux">
                                    <Button variant="success" style={{fontWeight:'bold'}}>Start</Button>
                                </Link>
                            </div>

                            <div className="linux-tags">
                                <Link className="linux-tag1" to = "tags/linux">#linux</Link>
                                <Link className="linux-tag2" to = "tags/linux">#beginner</Link>
                            </div>
                            <p> </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper variant="outlined" className="popular-courses-grid3" style={{backgroundColor:'#555555' }}>
                            <img className="linux-image" style={{position:'relative', marginTop:'auto', marginLeft:'auto', textAlign:'center'}} src = {Linux} alt="Linux Image"/>
                            <h2 className="linux-title1" style={{color: 'white', position:'relative', textAlign:'center'}}>Introduction</h2>
                            <h3 className="linux-title2">To Linux</h3>
                            <p className="linux-desc">Learn the fundamentals of linux.</p>
                            <div className="linux-button">
                                <Link to="/courses/introduction-to-linux">
                                    <Button variant="success" style={{fontWeight:'bold'}}>Start</Button>
                                </Link>
                            </div>

                            <div className="linux-tags">
                                <Link className="linux-tag1" to = "tags/linux">#linux</Link>
                                <Link className="linux-tag2" to = "tags/linux">#beginner</Link>
                            </div>
                            <p> </p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
