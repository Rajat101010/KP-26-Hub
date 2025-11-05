import { createContext, useContext, useState, useEffect } from "react";

const ActiveDaysContext = createContext();

export const ActiveDaysProvider = ({ children }) => {
  // Load saved data from localStorage (if exists)
  const [activeDays, setActiveDays] = useState(() => {
    const saved = localStorage.getItem("activeDays");
    return saved
      ? JSON.parse(saved)
      : {
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,  // ✅ always active by default
          sunday: true,    // ✅ always active by default
        };
  });

  // Whenever admin toggles something, save to localStorage
  useEffect(() => {
    localStorage.setItem("activeDays", JSON.stringify(activeDays));
  }, [activeDays]);

  // Function for toggling days (used by admin)
  const toggleDay = (day) => {
    setActiveDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <ActiveDaysContext.Provider value={{ activeDays, toggleDay, setActiveDays }}>
      {children}
    </ActiveDaysContext.Provider>
  );
};

// Hook for using active days anywhere (user or admin)
export const useActiveDays = () => useContext(ActiveDaysContext);
