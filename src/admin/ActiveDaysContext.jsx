import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebaseConfig"; // your firebase config
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";

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

  useEffect(() => {
    const docRef = doc(db, "settings", "activeDays");

    // Real-time sync: listens for admin updates
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setActiveDays(docSnap.data());
      }
    });

    return () => unsubscribe();
  }, []);

  // Optional: if you want admin to update it
  const updateActiveDays = async (newDays) => {
    const docRef = doc(db, "settings", "activeDays");
    await updateDoc(docRef, newDays);
  };

  return (
    <ActiveDaysContext.Provider value={{ activeDays, setActiveDays: updateActiveDays }}>
      {children}
    </ActiveDaysContext.Provider>
  );
};

export const useActiveDays = () => useContext(ActiveDaysContext);
