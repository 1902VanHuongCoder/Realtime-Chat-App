import { initializeApp } from "firebase/app";

//import getAuth and GoogleAuthProvider from firebase/auth 
import {getAuth, GoogleAuthProvider} from "firebase/auth"

//import getFirestore
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA1WVB11BitkduMHVMG9raamZSW6g_LUyE",
  authDomain: "chat-app-3dd0a.firebaseapp.com",
  projectId: "chat-app-3dd0a",
  storageBucket: "chat-app-3dd0a.appspot.com",
  messagingSenderId: "161399154799",
  appId: "1:161399154799:web:bb9fd1ee1c12e31d2a859a",
  measurementId: "G-ECJPSVFZ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export auth service from firebase 
export const auth = getAuth(app); 

// export firestore service 
export const db = getFirestore(app);

// export Google Provider
export const provider = new GoogleAuthProvider();