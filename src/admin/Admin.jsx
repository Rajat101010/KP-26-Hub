import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { useActiveDays } from "./ActiveDaysContext";
import { useMessage } from "./MessageContext";
import HeaderAdmin from "./header_admin";
import FooterAdmin from "./footer_admin";

import { FaPaperPlane } from "react-icons/fa";

export default function Admin() {
    const CORRECT_PASSWORD = "elephant2212";
    const [inputPassword, setInputPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { activeDays, setActiveDays } = useActiveDays();
    const { sendMessage } = useMessage();
    const [messageText, setMessageText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputPassword === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert("❌ Incorrect password!");
        }
    };

    const handleCancel = () => navigate(-1);

    const toggleDay = (day) => {
        setActiveDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    const handleSendMessage = () => {
        if (!messageText.trim()) return alert("⚠️ Please type a message!");
        sendMessage(messageText);
        alert("✅ Message sent! It will expire automatically after 2 hours.");
        setMessageText("");
    };

    if (!isAuthenticated) {
        return (
            <div className="admin-password-container">
                <div className="admin-password-box">
                    <button className="admin-close-btn" onClick={handleCancel}>✖</button>
                    <h2 className="admin-heading">🔒 Admin Access</h2>
                    <form onSubmit={handleSubmit} className="admin-form">
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            className="admin-input"
                        />
                        <button type="submit" className="admin-btn">Enter</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <main>
            <HeaderAdmin />
            <div className="admin-container">
                <p className="admin-subtitle">Toggle which days are active for buses:</p>
                <div className="admin-days-list">
                    {Object.keys(activeDays).map((day) => (
                        <label key={day} className="admin-day-item">
                            <input
                                type="checkbox"
                                checked={activeDays[day]}
                                onChange={() => toggleDay(day)}
                            />
                            <span>{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                        </label>
                    ))}
                </div>

                <hr className="admin-divider" />

                {/* 📢 Admin message box */}
                <div className="admin-message-section">
                    <h3>📢 Send Message (Active for 2 hours)</h3>
                    <br />
                    <div className="admin-message-box">
                        <textarea
                            className="admin-message-input"
                            placeholder="Type your announcement here..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <button className="admin-send-icon" onClick={handleSendMessage}>
                            <FaPaperPlane />
                        </button>
                    </div>
                </div>

                <div className="admin-back-btn-container">
                    <button className="admin-back-btn" onClick={handleCancel}>
                        Save
                    </button>
                </div>
            </div>
            <FooterAdmin />
        </main>
    );
}
