import { motion } from "framer-motion";

import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";


// import { TbMeat } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
// import { IoFishOutline } from "react-icons/io5";
// import { TbEggs } from "react-icons/tb";
// import { BsEggFried } from "react-icons/bs";
import { LuMilk } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";
// import { PiCookie } from "react-icons/pi";
import { LiaCookieSolid } from "react-icons/lia";
// import { PiBread } from "react-icons/pi";
import { BiBowlRice } from "react-icons/bi";
import { LuBanana } from "react-icons/lu";



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
                            <div className="menu_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Breakfast
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={breakfast} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Puri <LuLeaf /></div>
                                        <div>Ghuguni <LuLeaf /></div>
                                        <div>Corn Flakes <LuLeaf /></div>
                                        <div>Milk <LuMilk /></div>
                                        <div>Banana <LuBanana /></div>
                                        <div>Tea <BsCupHot /></div>
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
                            <div className="menu_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Lunch
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={lunch} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice <BiBowlRice /></div>
                                        <div>Roti <LiaCookieSolid /></div>
                                        <div>Dal <LuLeaf /></div>
                                        <div>Mix Boiled Veg <LuLeaf /></div>
                                        <div>Vegetable Korma <LuLeaf /></div>
                                        <div>French Fries <LuLeaf /></div>
                                        <div>Papad <LuLeaf /></div>
                                        <div>Curd <LuLeaf /></div>
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
                            <div className="menu_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Snacks
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={Snacks} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Sweet Corn <LuLeaf /></div>
                                        <div>Rusk <LuLeaf /></div>
                                        <div>Tea <BsCupHot /></div>
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
                            <div className="menu_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Dinner
                                </font>
                            </div>
                            <div className="menu_sub_part_div2">
                                <font className='font_menu_time'>
                                    <Schedule dayIndex={1} timeSlots={Dinner} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice <BiBowlRice /></div>
                                        <div>Roti <LiaCookieSolid /></div>
                                        <div>Dal <LuLeaf /></div>
                                        <div>Mix Boiled Veg <LuLeaf /></div>
                                        <div>Gobi Alu Matar Masala <LuLeaf /></div>
                                        <div>Seasonal Bhaji <LuLeaf /></div>
                                        <div>Gulab Jamun <LiaCookieSolid /></div>
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
