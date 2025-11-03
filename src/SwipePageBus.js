import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SwipePageBus({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const minSwipeDistance = 50; // minimum distance (px) to trigger swipe

  const campus = ["", "bus-now", "bus-c_25", "bus-c_15_7_8", "bus-c_3"];
  let currentCampus = location.pathname.replace("/", "").trim().toLowerCase();

  // Treat "/" and "/bus-now" as the same page
  if (currentCampus === "" || currentCampus === "bus-now") {
    currentCampus = "bus-now";
  }
  const currentIndex = campus.indexOf(currentCampus);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
      setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const distanceX = touchEndX - touchStartX;
      const distanceY = Math.abs(endY - touchStartY);

      // Ignore mostly vertical gestures (scroll)
      if (Math.abs(distanceX) < Math.abs(distanceY)) return;

      if (Math.abs(distanceX) > minSwipeDistance && currentIndex !== -1) {
        if (distanceX > 0 && currentIndex > 0) {
          navigate(`/${campus[currentIndex - 1]}`);
        } else if (distanceX < 0 && currentIndex < campus.length - 1) {
          navigate(`/${campus[currentIndex + 1]}`);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStartX, touchStartY, touchEndX, currentIndex, navigate]);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        touchAction: "pan-y", // allows vertical scroll
      }}
    >
      {children}
    </div>
  );
}

export default SwipePageBus;
