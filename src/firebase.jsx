import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1HYYeOniju1Mmln2L6OUXZXn-Fz8rXgY",
  authDomain: "xernd-2c30a.firebaseapp.com",
  projectId: "xernd-2c30a",
  storageBucket: "xernd-2c30a.appspot.com",
  messagingSenderId: "477288062116",
  appId: "1:477288062116:web:803cd19ad232d4e7d09a31"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
