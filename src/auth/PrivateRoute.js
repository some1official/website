import firebase from './../configs/firebaseConfig'

const checkAuth = () => {
    if(firebase.auth().currentUser) {
        return true;
    }
    else {
        return false;
    }
}

export default checkAuth;