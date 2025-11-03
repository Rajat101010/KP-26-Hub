import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // ✅ Ask for notification permission (safely)
  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      try {
        Notification.requestPermission().then((permission) => {
          console.log("Notification permission:", permission);
        });
      } catch (err) {
        console.warn("Notification permission request failed:", err);
      }
    }
  }, []);

  // 🔄 Load message and trigger notification
  useEffect(() => {
    try {
      const savedMessage = localStorage.getItem("adminMessage");
      const expiry = localStorage.getItem("adminMessageExpiry");

      if (savedMessage && expiry && Date.now() < Number(expiry)) {
        setMessage(savedMessage);
        setHasNotification(true);

        // ✅ Only send notification if allowed
        if (
          typeof window !== "undefined" &&
          "Notification" in window &&
          Notification.permission === "granted"
        ) {
          new Notification("📢 New Message from Admin", {
            body: savedMessage,
            icon: "/favicon.ico",
          });
        }
      } else {
        localStorage.removeItem("adminMessage");
        localStorage.removeItem("adminMessageExpiry");
      }
    } catch (err) {
      console.warn("Error loading message:", err);
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
