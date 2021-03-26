import React from 'react'; 
import { Navbar, Button } from 'react-bootstrap';
import Logo from './../../assets/images/logo.transparent.png';
import './index.css';
import { Link } from 'react-router-dom';
import { useAuth } from "./../../contexts/AuthContext"

const NavigationBar = () => {
  
  const { currentUser } = useAuth()

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="logo">
          <a href="/">
          <img src={Logo} width="20" height="20"></img>
          {' '}
          </a>
        </Navbar.Brand>
        <Link to="/" style={{ textDecoration: 'none' }}><p className="logo-title">SOME1</p></Link>

        <div className="main-pages">
          <Link to="/courses" style={{textDecoration: 'none', color: 'white'}} className="courses">Courses</Link>
          <Link to="/top-stories" style={{textDecoration: 'none', color: 'white'}} className="stories">Top Stories</Link>
        </div>

        {currentUser ? 
        <Link to = "/dashboard" 
          style={{textDecoration: 'none'}}>
            <Button variant="primary" 
              style={{borderRadius:'8px', fontWeight:'bold'}}>
                Profile
                  </Button>
                    </Link>
         : 
        <Link to ="/signup" 
          style={{textDecoration: 'none'}}>
            <Button variant="primary" 
              style={{borderRadius:'8px', fontWeight:'bold', display:'flex', justifyContent:'left' }}>
                Sign Up
                  </Button>
                    </Link>
        }
      </Navbar>
    </>
  );
};
  
export default NavigationBar;