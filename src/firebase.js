// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAr1RsqtdF_fD5I64Es1gl3iiiMLHzJiVs",
  authDomain: "pantry-tracker-96aac.firebaseapp.com",
  projectId: "pantry-tracker-96aac",
  storageBucket: "pantry-tracker-96aac.appspot.com",
  messagingSenderId: "927404105500",
  appId: "1:927404105500:web:4972d32d1773898ffc64d9",
  measurementId: "G-CL3BJVCSL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

