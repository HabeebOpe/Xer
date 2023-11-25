import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1HYYeOniju1Mmln2L6OUXZXn-Fz8rXgY",
  authDomain: "xernd-2c30a.firebaseapp.com",
  projectId: "xernd-2c30a",
  storageBucket: "xernd-2c30a.appspot.com",
  messagingSenderId: "477288062116",
  appId: "1:477288062116:web:803cd19ad232d4e7d09a31"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
