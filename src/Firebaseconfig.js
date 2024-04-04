// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArmFtCIW2Zxb6vj8lXvF_IHf6EIV-l2IY",
  authDomain: "odc-crud-pro.firebaseapp.com",
  projectId: "odc-crud-pro",
  storageBucket: "odc-crud-pro.appspot.com",
  messagingSenderId: "884871123659",
  appId: "1:884871123659:web:ebb0858d8fa394a4af014e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();