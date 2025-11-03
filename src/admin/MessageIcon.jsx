import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // ✅ Safe notification trigger
  const showSystemNotification = (msg) => {
    try {
      if (!("Notification" in window)) return; // not supported

      if (Notification.permission === "granted") {
        new Notification("📢 New Message from Admin", {
          body: msg,
          icon: "/favicon.ico", // change this if you want your app icon
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((perm) => {
          if (perm === "granted") {
            new Notification("📢 New Message from Admin", {
              body: msg,
              icon: "/favicon.ico",
            });
          }
        });
      }
    } catch (err) {
      console.error("Notification error:", err);
    }
  };

  // 🔄 Load message safely
  useEffect(() => {
    try {
      const savedMessage = localStorage.getItem("adminMessage");
      const expiry = localStorage.getItem("adminMessageExpiry");
      const lastNotified = localStorage.getItem("adminMessageNotifiedAt");

      if (savedMessage && expiry && Date.now() < Number(expiry)) {
        setMessage(savedMessage);

        // show notification only if not shown before
        if (!lastNotified || lastNotified !== savedMessage) {
          setHasNotification(true);
          showSystemNotification(savedMessage);
          localStorage.setItem("adminMessageNotifiedAt", savedMessage);
        }
      } else {
        localStorage.removeItem("adminMessage");
        localStorage.removeItem("adminMessageExpiry");
        localStorage.removeItem("adminMessageNotifiedAt");
      }
    } catch (err) {
      console.error("MessageIcon load error:", err);
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
