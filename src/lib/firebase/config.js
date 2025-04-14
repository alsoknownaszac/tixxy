// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR2nU9spxbQxK_YKhX2m__BCR7N9NgYGw",
  authDomain: "tixxy-6e3c0.firebaseapp.com",
  projectId: "tixxy-6e3c0",
  storageBucket: "tixxy-6e3c0.firebasestorage.app",
  messagingSenderId: "772825816313",
  appId: "1:772825816313:web:65dc5db507db85693ed628",
  measurementId: "G-RG1DTSWDJ3",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
