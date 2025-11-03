import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  // 🔄 Load message from localStorage
  useEffect(() => {
    const savedMessage = localStorage.getItem("adminMessage");
    const expiry = localStorage.getItem("adminMessageExpiry");

    if (savedMessage && expiry && Date.now() < Number(expiry)) {
      setMessage(savedMessage);
      setHasNotification(true);
    } else {
      // Remove expired message
      localStorage.removeItem("adminMessage");
      localStorage.removeItem("adminMessageExpiry");
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
