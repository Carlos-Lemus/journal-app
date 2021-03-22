 import firebase from "firebase/app";
 import "firebase/firestore";
 import "firebase/auth"; 

 
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_xPZqac2y0BDzTJUO9LokNtjUtqn6ULY",
    authDomain: "react-curso-be090.firebaseapp.com",
    projectId: "react-curso-be090",
    storageBucket: "react-curso-be090.appspot.com",
    messagingSenderId: "893681803521",
    appId: "1:893681803521:web:48cd4ac217d4065bdc7b00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};