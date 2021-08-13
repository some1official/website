


import firebase from './../../configs/firebaseConfig'

const givePremium = () => {
    const userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId).child(userId).set({"subscription": "premium"})
};

export default givePremium;