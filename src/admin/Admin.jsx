import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { useActiveDays } from "./ActiveDaysContext";

import HeaderAdmin from './header_admin'
import FooterAdmin from './footer_admin'

export default function Admin() {
    const CORRECT_PASSWORD = "elephant2212"; // 🔒 change this
    const [inputPassword, setInputPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { activeDays, setActiveDays } = useActiveDays();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputPassword === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
        } else {
            alert("❌ Incorrect password!");
        }
    };

    const handleCancel = () => {
        navigate(-1); // 👈 Goes back to previous page
    };

    const toggleDay = (day) => {
        setActiveDays((prev) => ({ ...prev, [day]: !prev[day] }));
    };

    // 🔐 Password input UI
    if (!isAuthenticated) {
        return (
            <div className="admin-password-container">
                <div className="admin-password-box">
                    <button className="admin-close-btn" onClick={handleCancel}>
                        ✖
                    </button>
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

    // 🧑‍💻 Admin controls UI
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

                {/* 🔙 Back button */}
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
