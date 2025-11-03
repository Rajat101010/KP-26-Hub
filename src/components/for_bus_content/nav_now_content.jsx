import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

// Import bus lists from all campuses
import { c_25Buses } from "./nav_c_25_content";
import { c_15Buses } from "./nav_c_15_7_8_content";
import { c_3Buses } from "./nav_c_3_content";

function NowActiveBuses() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday

    // ✅ Hooks must be at the top
    const [fromFilter, setFromFilter] = useState("");
    const [toFilter, setToFilter] = useState("");

    // ✅ Combine all bus data
    const allBuses = [
        ...(c_25Buses || []).map((b) => ({ ...b, campus: "C 25" })),
        ...(c_15Buses || []).map((b) => ({ ...b, campus: "C 15" })),
        ...(c_3Buses || []).map((b) => ({ ...b, campus: "C 3" })),
    ];

    // ✅ If weekend, show message only (don’t calculate buses)
    if (day === 0 || day === 6) {
        return (
            <main>
                <center style={{ marginTop: "60px" }}>
                    <font className="font_menu_description">
                        🚫 Bus services are inactive on weekends
                        <br />(Saturday & Sunday)
                    </font>
                </center>
            </main>
        );
    }

    // ✅ Filter active buses
    const activeBuses = allBuses.filter((bus) => {
        const t = new Date();
        t.setHours(bus.time.h, bus.time.m, 0, 0);
        const diffMins = (t - now) / 60000;
        return diffMins <= 30 && diffMins >= -15;
    });

    // ✅ Unique dropdown options
    const uniqueFrom = [...new Set(activeBuses.map((b) => b.from))];
    const uniqueTo = [...new Set(activeBuses.map((b) => b.to))];

    // ✅ Apply filters
    const filteredBuses = activeBuses.filter((bus) => {
        const matchFrom = fromFilter ? bus.from === fromFilter : true;
        const matchTo = toFilter ? bus.to === toFilter : true;
        return matchFrom && matchTo;
    });

    return (
        <main>
            <center>
                {/* 🔽 Dropdown Filters */}
                <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
                    <select
                        value={fromFilter}
                        onChange={(e) => setFromFilter(e.target.value)}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "5px",
                            color: "white",
                            border: "1px solid #fafad2",
                            backgroundColor: "#2C2C2C",
                            fontSize: "14px",
                            outline: "none",
                            width: "30%",
                        }}
                    >
                        <option value="">From (All)</option>
                        {uniqueFrom.map((from, i) => (
                            <option key={i} value={from}>{from}</option>
                        ))}
                    </select>

                    <select
                        value={toFilter}
                        onChange={(e) => setToFilter(e.target.value)}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "5px",
                            color: "white",
                            border: "1px solid #fafad2",
                            backgroundColor: "#2C2C2C",
                            fontSize: "14px",
                            outline: "none",
                            width: "30%",
                        }}
                    >
                        <option value="">To (All)</option>
                        {uniqueTo.map((to, i) => (
                            <option key={i} value={to}>{to}</option>
                        ))}
                    </select>
                </div>

                {/* 🚍 Active Bus Display */}
                <div className="menu_parent">
                    {filteredBuses.length > 0 ? (
                        filteredBuses.map((bus) => {
                            const t = new Date();
                            t.setHours(bus.time.h, bus.time.m, 0, 0);
                            return (
                                <motion.div
                                    key={`${bus.campus}-${bus.id}`}
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -200, opacity: 0 }}
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
                                                    <font className="font_menu_description">Bus no:</font>
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
                    ) : (
                        <div style={{ marginTop: "50px" }}>
                            <font className="font_menu_description">
                                🚍 No active buses right now
                            </font>
                        </div>
                    )}
                </div>
            </center>
        </main>
    );
}

export default NowActiveBuses;
