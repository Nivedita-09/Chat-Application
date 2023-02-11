// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxx4rC-pJtxr2xM7T3s9qQeLPXLDM-AGs",
  authDomain: "chat-application-ef4bb.firebaseapp.com",
  projectId: "chat-application-ef4bb",
  storageBucket: "chat-application-ef4bb.appspot.com",
  messagingSenderId: "621055265530",
  appId: "1:621055265530:web:7cc220d5b7eda46de95743",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
