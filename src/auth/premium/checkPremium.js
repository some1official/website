{/*
    Will check if the user logged in has premium or not
    By checking if the user has a value subscription: premium
    into the database from firebase

    Something like that I don't know how to explain it well
*/}

import firebase from './../../configs/firebaseConfig'

const userId = firebase.auth().currentUser.uid

const checkSubscription = () => {
    firebase.database().ref('users/${userId}/subscription').once("premium", snapshot => {
        if(snapshot.exists()) {
            const subscription = snapshot.val()
            return true;
        }
        else {
            return false;
        }
    })
};

export default checkSubscription;