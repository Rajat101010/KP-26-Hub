// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCQgbWeopaFlHFWt4OWs8lbkBDHhxxT43Y",
  authDomain: "kp-26-hub.firebaseapp.com",
  projectId: "kp-26-hub",
  storageBucket: "kp-26-hub.firebasestorage.app",
  messagingSenderId: "310377468511",
  appId: "1:310377468511:web:3dbd8e852226704d5c01ea",
  measurementId: "G-NG4VN3K5BK"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🔔 Initialize Firebase Messaging
export const messaging = getMessaging(app);

// ✅ Request Notification Permission and get token
export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "BE1ary4vXqIF7U0PJKNXgaxZyKEvFcI-KBp1zKgHVOI6JHfz2nvNGvUBv3NyIuuIQmixpRbsEbZAII4zLmRrPfI"
    });

    if (token) {
      console.log("FCM Token:", token);
    } else {
      console.warn("No registration token available.");
    }
  } catch (err) {
    console.error("An error occurred while retrieving token.", err);
  }
};

// 🪄 Handle messages when app is open
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/favicon.ico",
  });
});
