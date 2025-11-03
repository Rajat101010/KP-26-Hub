import { useState, useEffect } from "react";
import "./MessageIcon.css";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa";
import { db } from "../firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export default function MessageIcon() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "messages", "adminMessage"), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.expiry > Date.now()) {
          setMessage(data.text);
          setHasNotification(true);
        } else {
          setMessage("");
          setHasNotification(false);
        }
      }
    });

    return () => unsub();
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
      <div className="message-icon-container" onClick={handleOpenPopup}>
        <span className="message-icon">
          {showPopup ? <FaRegEnvelopeOpen /> : <FaRegEnvelope />}
        </span>
        {hasNotification && !showPopup && <span className="notification-dot"></span>}
      </div>

      {showPopup && (
        <div className="message-popup-overlay">
          <div className="message-popup">
            <button className="close-popup-btn" onClick={handleClosePopup}>✖</button>
            <h3>📢 Message from Admin</h3>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
