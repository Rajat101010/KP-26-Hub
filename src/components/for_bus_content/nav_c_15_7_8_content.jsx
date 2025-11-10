import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

export const c_15Buses = [
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

function C15Content() {
    return (
        <main>
            <center>
                <div className="menu_parent">
                    {c_15Buses.map((bus) => {
                        const t = new Date();
                        t.setHours(bus.time.h, bus.time.m, 0, 0);
                        return (
                            <motion.div
                                key={bus.id}
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
                    })}
                </div>
            </center>
        </main>
    );
}

export default C15Content;
