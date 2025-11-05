import { createContext, useContext, useState, useEffect } from "react";

const ActiveDaysContext = createContext();

export const ActiveDaysProvider = ({ children }) => {
  const [activeDays, setActiveDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  });

  // ✅ Load from shared JSON file so all users get same data
  const loadActiveDays = async () => {
    try {
      const res = await fetch("/activeDays.json?timestamp=" + Date.now());
      const data = await res.json();
      setActiveDays(data);
    } catch (error) {
      console.warn("Could not load activeDays.json:", error);
    }
  };

  useEffect(() => {
    loadActiveDays();
    // Auto refresh every 30 seconds to get admin changes
    const interval = setInterval(loadActiveDays, 30000);
    return () => clearInterval(interval);
  }, []);

  // ✅ For admin: update (local update only, JSON overwrite must be manual or via API)
  const updateActiveDays = (newDays) => {
    setActiveDays(newDays);
  };

  return (
    <ActiveDaysContext.Provider value={{ activeDays, setActiveDays: updateActiveDays }}>
      {children}
    </ActiveDaysContext.Provider>
  );
};

export const useActiveDays = () => useContext(ActiveDaysContext);
