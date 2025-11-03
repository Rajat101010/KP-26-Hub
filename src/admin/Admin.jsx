import { useState } from "react";
import "./Admin.css";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = "admin123"; // change this to your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-container">
        <div className="admin-box">
          <h2>🔒 Admin Access</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
            />
            <button type="submit" className="admin-button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <div>hello</div>;
}

export default Admin;
