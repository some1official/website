import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./../../contexts/AuthContext"
import { database, auth } from "./../../firebase"


export default function CourseRoute({ component: Component, ...rest }) {

  function PremiumSubscription() {

    var returns;

    database.ref('accounts').
      child(auth.currentUser.uid).
      child('subscription').on('value', snap => 
        {
          if(snap.val()=="free") {
            console.log('true');
            return returns = false;
          }
          else if(snap.val()=="pro") {
            console.log('false');
            return returns = true;
          }
        }
      )
  }
  

  return (
    <Route
      {...rest}
      render={props => {
        return PremiumSubscription() ? <Component {...props} /> : <Redirect to="/test" />
      }}
    ></Route>
  )
}