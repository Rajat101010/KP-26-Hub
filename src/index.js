import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MessageProvider } from "./admin/MessageContext";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebaseConfig"; // ✅ make sure this is exported in firebaseConfig.js

// 🔑 Request notification permission and get FCM token
async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("✅ Notification permission granted.");

      const token = await getToken(messaging, {
        vapidKey: "BE1ary4vXqIF7U0PJKNXgaxZyKEvFcI-KBp1zKgHVOI6JHfz2nvNGvUBv3NyIuuIQmixpRbsEbZAII4zLmRrPfI", // 🔹 Replace this with your Firebase Console Web Push Key
      });

      if (token) {
        console.log("📩 FCM Token:", token);
      } else {
        console.warn("⚠️ No registration token available. Request permission again.");
      }
    } else {
      console.warn("🚫 Notification permission denied.");
    }
  } catch (error) {
    console.error("❌ Error getting FCM token:", error);
  }
}

// 🧠 Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/firebase-messaging-sw-v2.js");
      console.log("✅ Service Worker registered successfully:", registration);
      await requestNotificationPermission();
    } catch (error) {
      console.error("❌ Service Worker registration failed:", error);
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </React.StrictMode>
);

reportWebVitals();
