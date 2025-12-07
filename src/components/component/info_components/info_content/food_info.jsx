import { motion } from "framer-motion";

import "../../../../components/css/info_components/info_content.css";
import "../../../../components/css/info_components/RevolvingBorder.css";

function FoodContent() {
    return (
        <main>
            <center>
                <div className="info_parent">
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <div className="info_div2">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Quantity
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_info_description'>
                                    <ul>
                                        <li>Chicken (4 Pieces)</li>
                                        <li>Fish (2 Pieces)</li>
                                        <li>Egg (2 Pieces)</li>
                                        <li>Banana (2 Pieces)</li>
                                        <li>Rusk (4 Pieces) </li>
                                        <li>Egg Omlet (2 Pieces)</li>
                                    </ul>
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
                        <div className="info_div2">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Everyday
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_info_description'>
                                    <ul>
                                        <li>Mix Boiled Veg</li>
                                        <li>Pickel</li>
                                        <li>Onion</li>
                                        <li>Green Chilly</li>
                                        <li>Salt</li>
                                    </ul>
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
                        <div className="info_div2">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Occasionally
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_info_description'>
                                    <ul>
                                        <li>Sugar (When Curd is Served)</li>
                                    </ul>
                                </font>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </center>
        </main>
    );
}

export default FoodContent;
