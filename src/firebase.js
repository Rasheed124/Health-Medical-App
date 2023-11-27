
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
 

   apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
   authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
   projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
   appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
   measurementID: import.meta.env.VITE_APP_MEASUREMENT_ID,
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };