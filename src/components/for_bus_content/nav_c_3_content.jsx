import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import BusTimer from "../BusTimer";

export const c_3Buses = [
    { id: 1, from: "H", to: "C 3", time: { h: 8, m: 40 }, busNo: "Mini" },
    { id: 2, from: "C 3", to: "H", time: { h: 9, m: 10 }, busNo: "Mini" },
    { id: 3, from: "H", to: "C 3, 15", time: { h: 9, m: 45 }, busNo: "Mini" },
    { id: 4, from: "C 3", to: "H", time: { h: 10, m: 10 }, busNo: "Mini" },
    { id: 5, from: "H", to: "C 3", time: { h: 13, m: 50 }, busNo: "Mini" },
    { id: 6, from: "C 3", to: "H", time: { h: 14, m: 10 }, busNo: "Mini" },
    { id: 5, from: "H", to: "C 3", time: { h: 15, m: 0 }, busNo: "Mini" },
    { id: 6, from: "C 3", to: "H", time: { h: 16, m: 15 }, busNo: "Mini" },
    { id: 7, from: "C 3", to: "H", time: { h: 16, m: 20 }, busNo: "32" },
    { id: 8, from: "H", to: "C 3", time: { h: 17, m: 40 }, busNo: "Mini" },
    { id: 9, from: "C 3", to: "H", time: { h: 18, m: 15 }, busNo: "Mini" },
];

function C25Content() {
    return (
        <main>
            <center>
                <div className="menu_parent">
                    {c_3Buses.map((bus) => {
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

export default C25Content;
