import { motion } from "framer-motion";

import Schedule from "../Schedule";
import "../../../../components/css/food_components/day_content.css";


import { TbMeat } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { IoFishOutline } from "react-icons/io5";
// import { TbEggs } from "react-icons/tb";
import { BsEggFried } from "react-icons/bs";
// import { LuMilk } from "react-icons/lu";
import { BsCupHot } from "react-icons/bs";
// import { PiCookie } from "react-icons/pi";
import { LiaCookieSolid } from "react-icons/lia";
import { PiBread } from "react-icons/pi";
import { CiBowlNoodles } from "react-icons/ci";
import { BiBowlRice } from "react-icons/bi";
// import { LuBanana } from "react-icons/lu";




function WednesdayContent() {
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
                                    <Schedule dayIndex={3} timeSlots={breakfast} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Egg Omlet <BsEggFried /></div>
                                        <div>Veg Cutlet <LuLeaf /></div>
                                        <div>Bread <PiBread size={14} /></div>
                                        <div>Jam <LuLeaf /></div>
                                        <div>Butter <LuLeaf /></div>
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
                                    <Schedule dayIndex={3} timeSlots={lunch} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice <BiBowlRice /></div>
                                        <div>Roti <LiaCookieSolid /></div>
                                        <div>Dal <LuLeaf /></div>
                                        <div>Mix Boiled Veg <LuLeaf /></div>
                                        <div>Cabbage Alu Masala <LuLeaf /></div>
                                        <div>Fish Masala <IoFishOutline size={14}/></div>
                                        <div>Salad <LuLeaf /></div>
                                        <div>Frimes <LuLeaf /></div>
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
                                    <Schedule dayIndex={3} timeSlots={Snacks} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Veg Hakka Noodles <CiBowlNoodles size={17}/></div>
                                        <div>Coffee <BsCupHot /></div>
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
                                    <Schedule dayIndex={3} timeSlots={Dinner} />
                                </font>
                            </div>
                            <div className="menu_sub_part_div3">
                                <font className='font_menu_description'>
                                    <div className="food_one_by_one">
                                        <div>Rice <BiBowlRice /></div>
                                        <div>Roti <LiaCookieSolid /></div>
                                        <div>Dal <LuLeaf /></div>
                                        <div>Mix Boiled Veg <LuLeaf /></div>
                                        <div>Chicken Masala <TbMeat /></div>
                                        <div>Paneer Masala <LuLeaf /></div>
                                        <div>Rasgulla <LiaCookieSolid /></div>
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

export default WednesdayContent;
