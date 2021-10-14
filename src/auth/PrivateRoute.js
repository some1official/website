import firebase from "firebase/app";
import "firebase/auth";

const checkAuth = () => {
  if (firebase.auth().currentUser) {
    return true;
  } else {
    return false;
  }
};

export default checkAuth;
