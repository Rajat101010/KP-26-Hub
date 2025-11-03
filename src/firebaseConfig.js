// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// ⚠️ Replace these values with your Firebase console values
const firebaseConfig = {
  apiKey: "AIzaSyCQgbWeopaFlHFWt4OWs8lbkBDHhxxT43Y",
  authDomain: "kp-26-hub.firebaseapp.com",
  projectId: "kp-26-hub",
  storageBucket: "kp-26-hub.firebasestorage.app",
  messagingSenderId: "310377468511",
  appId: "1:310377468511:web:3dbd8e852226704d5c01ea",
  measurementId: "G-NG4VN3K5BK"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
export const db = getFirestore(app);
export const messaging = getMessaging(app);
