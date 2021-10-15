import firebase from "./../configs/firebase-config";
import "firebase/auth";

const checkAuth = () => {
  if (firebase.auth().currentUser) {
    return true;
  } else {
    return false;
  }
};

export default checkAuth;
