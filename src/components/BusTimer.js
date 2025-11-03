// BusTimer.jsx
import { useEffect, useState } from "react";

export default function BusTimer({ departureTime, day }) {
  const [timeDiff, setTimeDiff] = useState(0);
  const [status, setStatus] = useState(""); // "upcoming" | "departed" | "idle"

  useEffect(() => {
    const departure = new Date(departureTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = departure - now;

      setTimeDiff(diff);

      if (diff > 0 && diff <= 30 * 60 * 1000) {
        setStatus("upcoming"); // 30 mins before departure
      } else if (diff < 0 && Math.abs(diff) <= 15 * 60 * 1000) {
        setStatus("departed"); // within 15 mins after departure
      } else {
        setStatus("idle"); // outside the active window
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [departureTime]);

  // 🟩 Determine today's day
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = daysOfWeek[new Date().getDay()].toLowerCase();
  const activeDay = day ? day.toLowerCase() : null;

  // 🚫 Hide timer on Saturday & Sunday
  if (today === "saturday" || today === "sunday") return null;

  // If a specific day is set and it's not today, hide it
  if (activeDay && today !== activeDay) return null;

  // If bus is not in active window, hide
  if (status === "idle") return null;

  // Format time into mm:ss
  const formatTime = (ms) => {
    const totalSec = Math.abs(Math.floor(ms / 1000));
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const textColor = status === "upcoming" ? "#00FF00" : "#FF0000";
  const labelText = status === "upcoming" ? "Departure in:" : "Departed since:";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        fontSize: "0.9rem",
        fontWeight: "400",
        marginTop: "0.5rem",
      }}
    >
      <span>{labelText}</span>
      <span style={{ color: textColor, fontWeight: "bold" }}>
        {formatTime(timeDiff)}
      </span>
    </div>
  );
}
