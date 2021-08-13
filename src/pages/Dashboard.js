import React from 'react'
import NavbarComponent from './../components/Navbar/NavbarComponent'
import { db } from './../configs/firebaseConfig'
import firebase from './../configs/firebaseConfig'
import givePremium from './../auth/premium/givePremium'

export default function Dashboard() {
  
    const userId = firebase.auth().currentUser.uid;
  
    return (
        <>
          <NavbarComponent />
          <button
            onClick={db.ref("users/" + userId + "/subscription").set("Premium")}
          >
          Get Premium
          </button>
          <button
            onClick={givePremium}
          >
            Check Premium
          </button>
        </>
    )
}
