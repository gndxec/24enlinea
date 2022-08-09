import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import 'firebase/storage'
// import 'firebase/functions'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Credenciales para conectarse a firebase
const firebaseConfig = {
    apiKey: "AIzaSyDM1-2Qk4O3BSCb4uaHb25uY9g8VnMW2Uo",
    authDomain: "yiga5-24enlinea.firebaseapp.com",
    projectId: "yiga5-24enlinea",
    storageBucket: "yiga5-24enlinea.appspot.com",
    messagingSenderId: "151755992585",
    appId: "1:151755992585:web:1779f7b0449ea0dc2d92d8",
    measurementId: "G-EXLNW03554"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
//const functions = firebase.functions()

export { db, firebase, auth, storage }