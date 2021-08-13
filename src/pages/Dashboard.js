import React from 'react'
import NavbarComponent from './../components/Navbar/NavbarComponent'
import givePremium from './../auth/premium/getPremium'

export default function Dashboard() {
    return (
        <>
          <NavbarComponent />
          <button
            onClick={<givePremium/>}
          >

          </button>
        </>
    )
}
