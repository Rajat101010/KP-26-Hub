import { motion } from "framer-motion";

import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";

import { PiBread } from "react-icons/pi";
import { PiBowlFood } from "react-icons/pi";
import { BsCupHot } from "react-icons/bs";
import { LiaCookieSolid } from "react-icons/lia";

function MondayContent() {
    const breakfast = [
        { start: "07:00", end: "10:00" }
    ];
    const lunch = [
        { start: "13:00", end: "15:00" }
    ];
    const Snacks = [
        { start: "18:00", end: "19:00" }
    ];
    const Dinner = [
        { start: "20:00", end: "22:00" }
    ];

    return (
        <main>
            <center>
                <div className="menu_parent">
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <div className="menu_div1">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Breakfast
                                    <div>
                                        <PiBread />
                                    </div>
                                </div>
                            </font>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={breakfast} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Puri</div>
                                        <div>Ghuguni</div>
                                        <div>Corn Flakes</div>
                                        <div>Milk</div>
                                        <div>Banana</div>
                                        <div>Tea</div>
                                    </div>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="menu_div2">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Lunch
                                    <div>
                                        <PiBowlFood />
                                    </div>
                                </div>
                            </font>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={lunch} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice</div>
                                        <div>Roti</div>
                                        <div>Dal</div>
                                        <div>Mix Boiled Veg</div>
                                        <div>Vegetable Korma</div>
                                        <div>French Fries</div>
                                        <div>Papad</div>
                                        <div>Curd</div>
                                    </div>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.55, ease: "easeInOut" }}
                    >
                        <div className="menu_div3">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Snacks
                                    <div>
                                        <BsCupHot size={16} />
                                    </div>
                                </div>
                            </font>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={Snacks} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Sweet Corn</div>
                                        <div>Rusk</div>
                                        <div>Tea</div>
                                    </div>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <div className="menu_div4">
                            <font className='font_menu_title_name'>
                                <div className="menu_sub_part_div1">
                                    Dinner
                                    <div>
                                        <LiaCookieSolid />
                                    </div>
                                </div>
                            </font>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={Dinner} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice</div>
                                        <div>Roti</div>
                                        <div>Dal</div>
                                        <div>Mix Boiled Veg</div>
                                        <div>Gobi Alu Matar Masala</div>
                                        <div>Seasonal Bhaji</div>
                                        <div>Gulab Jamun</div>
                                    </div>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </center>
        </main>
    );
}

export default MondayContent;
