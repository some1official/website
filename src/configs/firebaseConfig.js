import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBqair8vA6IVpLvuA8I7k6iWdAUnZAe764",
    authDomain: "learn-some1.firebaseapp.com",
    projectId: "learn-some1",
    storageBucket: "learn-some1.appspot.com",
    messagingSenderId: "19728638459",
    appId: "1:19728638459:web:030ea9ffe53ea6ca4eab5e",
    measurementId: "G-ZCYWVETQCL"
  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

firebase.analytics();

export default firebase;