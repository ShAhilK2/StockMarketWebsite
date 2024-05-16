// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoNXDe6DHbbKAL0gRnetcR_XwhT1yr0mA",
  authDomain: "stock-auth-b23cb.firebaseapp.com",
  projectId: "stock-auth-b23cb",
  storageBucket: "stock-auth-b23cb.appspot.com",
  messagingSenderId: "1065393815472",
  appId: "1:1065393815472:web:76787921a8f9003985a075"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth=getAuth();
export const db=getFirestore(app);
export default app;