import { createContext, useContext, useState, useEffect } from "react";

const ActiveDaysContext = createContext();

export const ActiveDaysProvider = ({ children }) => {
  // Load from localStorage or use default
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
          saturday: true,
          sunday: true,
        };
  });

  // Save changes to localStorage automatically
  useEffect(() => {
    localStorage.setItem("activeDays", JSON.stringify(activeDays));
  }, [activeDays]);

  return (
    <ActiveDaysContext.Provider value={{ activeDays, setActiveDays }}>
      {children}
    </ActiveDaysContext.Provider>
  );
};

export const useActiveDays = () => useContext(ActiveDaysContext);
