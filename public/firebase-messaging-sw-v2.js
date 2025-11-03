/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/10.12.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.3/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCQgbWeopaFlHFWt4OWs8lbkBDHhxxT43Y",
  authDomain: "kp-26-hub.firebaseapp.com",
  projectId: "kp-26-hub",
  storageBucket: "kp-26-hub.firebasestorage.app",
  messagingSenderId: "310377468511",
  appId: "1:310377468511:web:3dbd8e852226704d5c01ea",
  measurementId: "G-NG4VN3K5BK"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.ico",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
