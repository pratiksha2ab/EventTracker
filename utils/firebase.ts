import firebase from "firebase/app";
// import { initializeApp } from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDuvISxRc40lyeY-qmKGrIy_mHJnAcw9Po",
    authDomain: "eventfinder-268e8.firebaseapp.com",
    projectId: "eventfinder-268e8",
    storageBucket: "eventfinder-268e8.appspot.com",
    messagingSenderId: "730228457399",
    appId: "1:730228457399:web:f4bb31a8b344104e6db232",
    measurementId: "G-BNK909HMVQ"
  });
}

const auth = firebase.auth();


export { auth,firebase  };
