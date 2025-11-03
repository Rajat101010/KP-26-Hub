import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // ✅ Helper: Show native browser notification
  const showSystemNotification = (msg) => {
    if (!("Notification" in window)) return; // Browser doesn’t support notifications

    if (Notification.permission === "granted") {
      new Notification("📢 New Message from Admin", {
        body: msg,
        icon: "/favicon.ico", // use your logo or app icon here
        badge: "/favicon.ico",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("📢 New Message from Admin", {
            body: msg,
            icon: "/favicon.ico",
            badge: "/favicon.ico",
          });
        }
      });
    }
  };

  // 🔄 Load message from localStorage
  useEffect(() => {
    const savedMessage = localStorage.getItem("adminMessage");
    const expiry = localStorage.getItem("adminMessageExpiry");
    const lastNotified = localStorage.getItem("adminMessageNotifiedAt");

    if (savedMessage && expiry && Date.now() < Number(expiry)) {
      setMessage(savedMessage);

      // 🔔 Notify only if this is a new message
      if (!lastNotified || lastNotified !== savedMessage) {
        setHasNotification(true);
        showSystemNotification(savedMessage);
        localStorage.setItem("adminMessageNotifiedAt", savedMessage);
      }
    } else {
      // Remove expired message
      localStorage.removeItem("adminMessage");
      localStorage.removeItem("adminMessageExpiry");
      localStorage.removeItem("adminMessageNotifiedAt");
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

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* 💌 Message Icon (fixed bottom-right) */}
      <div className="message-icon-container" onClick={handleOpenPopup}>
        <span className="message-icon">
          {showPopup ? <FaRegEnvelopeOpen /> : <FaRegEnvelope />}
        </span>
        {hasNotification && !showPopup && <span className="notification-dot"></span>}
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
