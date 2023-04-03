// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAdKlguKcsDv3vIIauRO-63Zqz_BtjrNFo",
  authDomain: "shivansh-portfolio-4a3cb.firebaseapp.com",
  projectId: "shivansh-portfolio-4a3cb",
  storageBucket: "shivansh-portfolio-4a3cb.appspot.com",
  messagingSenderId: "88162157039",
  appId: "1:88162157039:web:ec891947993f7e6a23b61a",
  measurementId: "G-JY57ZG44Q7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();