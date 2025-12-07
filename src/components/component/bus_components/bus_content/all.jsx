import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

import "../../../css/bus_components/content.css";

export const allBusesCam = [
    { id: 1, from: "H", to: "C 25", time: { h: 7, m: 35 }, busNo: "32" },
    { id: 2, from: "H", to: "C 25", time: { h: 8, m: 35 }, busNo: "32" },
    { id: 3, from: "C 25", to: "H", time: { h: 9, m: 0 }, busNo: "32" },
    { id: 4, from: "H", to: "C 25", time: { h: 9, m: 20 }, busNo: "15" },
    { id: 5, from: "H", to: "C 25", time: { h: 9, m: 35 }, busNo: "32" },
    { id: 6, from: "H", to: "C 25", time: { h: 10, m: 35 }, busNo: "72" },
    { id: 7, from: "C 25", to: "H", time: { h: 11, m: 10 }, busNo: "15" },
    { id: 8, from: "H", to: "C 25", time: { h: 11, m: 35 }, busNo: "15" },
    { id: 9, from: "C 25", to: "H", time: { h: 12, m: 10 }, busNo: "32" },
    { id: 10, from: "H", to: "C 25", time: { h: 12, m: 35 }, busNo: "32" },
    { id: 11, from: "C 25", to: "H", time: { h: 13, m: 10 }, busNo: "32" },
    { id: 12, from: "H", to: "C 25", time: { h: 13, m: 35 }, busNo: "15" },
    { id: 13, from: "C 25", to: "H", time: { h: 14, m: 10 }, busNo: "15" },
    { id: 14, from: "C 25", to: "H", time: { h: 14, m: 10 }, busNo: "72" },
    { id: 15, from: "H", to: "C 25", time: { h: 14, m: 35 }, busNo: "72" },
    { id: 16, from: "H", to: "C 25", time: { h: 14, m: 35 }, busNo: "15" },
    { id: 17, from: "H", to: "C 25", time: { h: 14, m: 50 }, busNo: "32" },
    { id: 18, from: "C 25", to: "H", time: { h: 17, m: 25 }, busNo: "72" },
    { id: 19, from: "C 25", to: "H", time: { h: 17, m: 25 }, busNo: "32" },

    { id: 1, from: "H", to: "C 3", time: { h: 8, m: 35 }, busNo: "Mini" },
    { id: 2, from: "C 3", to: "H", time: { h: 9, m: 10 }, busNo: "Mini" },
    { id: 3, from: "H", to: "C 3", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 4, from: "C 3", to: "H", time: { h: 10, m: 10 }, busNo: "Mini" },
    { id: 5, from: "H", to: "C 3", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 6, from: "C 3", to: "H", time: { h: 12, m: 40 }, busNo: "Mini" },
    { id: 7, from: "H", to: "C 3", time: { h: 13, m: 50 }, busNo: "Mini" },
    { id: 8, from: "C 3", to: "H", time: { h: 14, m: 10 }, busNo: "Mini" },
    { id: 9, from: "C 3", to: "H", time: { h: 16, m: 20 }, busNo: "32" },
    { id: 10, from: "H", to: "C 3", time: { h: 17, m: 50 }, busNo: "Mini" },
    { id: 11, from: "C 3", to: "H", time: { h: 18, m: 15 }, busNo: "Mini" },

    { id: 1, from: "H", to: "C 15, 7, 8", time: { h: 7, m: 35 }, busNo: "21" },
    { id: 2, from: "C 15, 7, 8", to: "H", time: { h: 8, m: 10 }, busNo: "21" },
    { id: 3, from: "H", to: "C 15, 7, 8", time: { h: 8, m: 35 }, busNo: "21" },
    { id: 4, from: "H", to: "C 15", time: { h: 9, m: 40 }, busNo: "Mini" },
    { id: 5, from: "C 15, 7, 8", to: "H", time: { h: 10, m: 0 }, busNo: "21" },
    { id: 6, from: "C 15", to: "H", time: { h: 10, m: 10 }, busNo: "Mini" },
    { id: 7, from: "H", to: "C 15, 7, 8", time: { h: 10, m: 35 }, busNo: "21" },
    { id: 8, from: "H", to: "C 15, 7, 8", time: { h: 10, m: 40 }, busNo: "Mini" },
    { id: 9, from: "C 15, 7, 8", to: "H", time: { h: 12, m: 30 }, busNo: "21" },
    { id: 10, from: "H", to: "C 7", time: { h: 13, m: 10 }, busNo: "Mini" },
    { id: 11, from: "C 7", to: "H", time: { h: 13, m: 30 }, busNo: "Mini" },
    { id: 12, from: "H", to: "C 15, 7, 8", time: { h: 14, m: 20 }, busNo: "21" },
    { id: 13, from: "C 7", to: "H", time: { h: 15, m: 30 }, busNo: "21" },
    { id: 14, from: "H", to: "C 15, 7, 8", time: { h: 16, m: 0 }, busNo: "21" },
    { id: 15, from: "C 15, 7, 8", to: "H", time: { h: 16, m: 40 }, busNo: "21" },
];

function AllBusContent() {
    const [selectedCampus, setSelectedCampus] = useState("");

    const campuses = [...new Set(allBusesCam.flatMap((bus) => [bus.from, bus.to]))];

    const campusNames = campuses.reduce((acc, campus) => {
        if (campus === "H") acc[campus] = "All Campus";
        else acc[campus] = campus.replace("C ", "Campus ");
        return acc;
    }, {});

    const filteredBuses = selectedCampus
        ? allBusesCam
            .filter((bus) => bus.from === selectedCampus || bus.to === selectedCampus)
            .sort((a, b) => {
                // Convert time to minutes for comparison
                const timeA = a.time.h * 60 + a.time.m;
                const timeB = b.time.h * 60 + b.time.m;
                return timeA - timeB;
            })
        : [];

    return (
        <main>
            <center>
                <div style={{ margin: "20px 0" }}>
                    <select
                        value={selectedCampus}
                        onChange={(e) => setSelectedCampus(e.target.value)}
                        className="drop_down_menu"
                    >
                        <option value="">Select Campus</option>
                        {campuses.map((campus, index) => (
                            <option key={index} value={campus}>
                                {campusNames[campus]}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="menu_parent">
                    {!selectedCampus ? (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            Please select a campus to view buses
                        </div>
                    ) : filteredBuses.length === 0 ? (
                        <div style={{ marginTop: "50px", fontSize: "18px", color: "#555" }}>
                            No buses available for this campus
                        </div>
                    ) : (
                        filteredBuses.map((bus) => {
                            const t = new Date();
                            t.setHours(bus.time.h, bus.time.m, 0, 0);
                            return (
                                <motion.div
                                    key={`${selectedCampus}-${bus.id}`}
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                >
                                    <div className="menu_div1">
                                        <div className="menu_sub_part_div1">
                                            <font className="font_menu_title_name">
                                                {bus.from} <FaArrowRightLong /> {bus.to}
                                            </font>
                                        </div>
                                        <div className="menu_sub_part_div2">
                                            <font className="font_menu_time">
                                                {`${bus.time.h.toString().padStart(2, "0")}:${bus.time.m
                                                    .toString()
                                                    .padStart(2, "0")}`}
                                            </font>
                                        </div>
                                        <div className="menu_sub_part_div3">
                                            <div className="bus_number_section">
                                                <div>
                                                    <font className="font_menu_description">
                                                        Bus no:
                                                    </font>
                                                </div>
                                                <div className="bus_number">
                                                    <font className="font_bus_no">
                                                        <div className="colour">{bus.busNo}</div>
                                                    </font>
                                                </div>
                                            </div>
                                            <div>
                                                <font className="font_menu_time">
                                                    <BusTimer departureTime={t} />
                                                </font>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </center>
        </main>
    );
}

export default AllBusContent;
