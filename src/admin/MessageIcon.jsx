import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // ✅ Request permission safely
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      Notification.requestPermission().then((perm) =>
        console.log("Notification permission:", perm)
      );
    }
  }, []);

  // 🔄 Load message & trigger notification once
  useEffect(() => {
    const savedMessage = localStorage.getItem("adminMessage");
    const expiry = localStorage.getItem("adminMessageExpiry");
    const notified = localStorage.getItem("adminMessageNotified");

    if (savedMessage && expiry && Date.now() < Number(expiry)) {
      setMessage(savedMessage);
      setHasNotification(true);

      if (
        "Notification" in window &&
        Notification.permission === "granted" &&
        !notified
      ) {
        try {
          new Notification("📢 New Message from Admin", {
            body: savedMessage,
            icon: "/favicon.ico",
          });
          localStorage.setItem("adminMessageNotified", "true");
          console.log("Notification sent successfully ✅");
        } catch (err) {
          console.warn("Notification failed ❌", err);
        }
      } else {
        console.log("Notification skipped (already sent or permission not granted)");
      }
    } else {
      localStorage.removeItem("adminMessage");
      localStorage.removeItem("adminMessageExpiry");
      localStorage.removeItem("adminMessageNotified");
    }
  }, []);

  const handleOpenPopup = () => {
    if (message) {
      setShowPopup(true);
      setHasNotification(false);
    } else {
      alert("No active message right now!");
    }
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      {/* 💌 Message Icon */}
      <div className="message-icon-container" onClick={handleOpenPopup}>
        <span className="message-icon">
          {showPopup ? <FaRegEnvelopeOpen /> : <FaRegEnvelope />}
        </span>
        {hasNotification && !showPopup && (
          <span className="notification-dot"></span>
        )}
      </div>

      {/* 🪟 Message Popup */}
      {showPopup && (
        <div className="message-popup-overlay">
          <div className="message-popup">
            <button className="close-popup-btn" onClick={handleClosePopup}>
              ✖
            </button>
            <h3>📢 Message from Admin</h3>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
