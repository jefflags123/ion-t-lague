
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDl47j0mpZw22fBG6tc7GyWt2DrbuU-I1o",
    authDomain: "it35-lague.firebaseapp.com",
    projectId: "it35-lague",
    storageBucket: "it35-lague.appspot.com",
    messagingSenderId: "822567636010",
    appId: "1:822567636010:web:c704b02cb2565de02a0753",
    measurementId: "G-1Q5GCWGV00"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}
