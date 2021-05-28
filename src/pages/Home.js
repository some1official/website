import React from 'react';
import NavbarComponent from './../components/Navbar/NavbarComponent'
import './../style/pages/Home.css'

//cards for featured tutorials grid
import PythonCard from './../components/Cards/Python/PythonCard'
import HtmlCard from './../components/Cards/Html/HtmlCard'
import LinuxCard from './../components/Cards/Linux/LinuxCard'

export default function Home() {
    return (
        <>
            <NavbarComponent />

            <section className="featured-tutorials-grid">
                <div className="featured-tutorials-grid-card"> <PythonCard/> </div>
                <div className="featured-tutorials-grid-card"> <HtmlCard/> </div>
                <div className="featured-tutorials-grid-card"> <LinuxCard/> </div>
            </section>

            
        </>
    )
}
