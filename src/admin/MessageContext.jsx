import { createContext, useContext, useState, useEffect } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [message, setMessage] = useState(null);

  // 🕒 Load saved message and expiry
  useEffect(() => {
    const saved = localStorage.getItem("adminMessage");
    const expiry = localStorage.getItem("adminMessageExpiry");

    if (saved && expiry && Date.now() < parseInt(expiry, 10)) {
      setMessage(saved);
    } else {
      localStorage.removeItem("adminMessage");
      localStorage.removeItem("adminMessageExpiry");
    }
  }, []);

  // 💾 Save message for 2 hours
  const sendMessage = (newMsg) => {
    setMessage(newMsg);
    const expiryTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours
    localStorage.setItem("adminMessage", newMsg);
    localStorage.setItem("adminMessageExpiry", expiryTime.toString());
  };

  return (
    <MessageContext.Provider value={{ message, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export const useMessage = () => useContext(MessageContext);
