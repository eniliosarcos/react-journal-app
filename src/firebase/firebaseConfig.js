
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0pxSDnrc7jz9o2v61HDkq60SrE4ViWPs",
    authDomain: "react-app-cursos-893eb.firebaseapp.com",
    projectId: "react-app-cursos-893eb",
    storageBucket: "react-app-cursos-893eb.appspot.com",
    messagingSenderId: "959568209402",
    appId: "1:959568209402:web:fc7e6f6e1d86475981b043"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}