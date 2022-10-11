
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDD1jJhiYswndgF4rIwp7zOhGmhoUGaxiI",
  authDomain: "systematic-d4959.firebaseapp.com",
  projectId: "systematic-d4959",
  storageBucket: "systematic-d4959.appspot.com",
  messagingSenderId: "1015029049577",
  appId: "1:1015029049577:web:4b3a60dd21c31cd719a878"
};


const app = initializeApp(firebaseConfig);  

export const db = getFirestore(app)