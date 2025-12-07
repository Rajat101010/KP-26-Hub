import { motion } from "framer-motion";

import { IoCallOutline } from "react-icons/io5";

import "../../../../components/css/info_components/info_content.css";
import "../../../../components/css/info_components/RevolvingBorder.css";

function ContactContent() {
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
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Reception
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+918114377672" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 8114377672
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
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Madana
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+917978874274" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 7978874274
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
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Ananta
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+917473836490" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 7473836490
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
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Dipu
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+919861896984" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 9861896984
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.85, ease: "easeInOut" }}
                    >
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Ajay
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+919776333782" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 9776333782
                                </font>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 1., ease: "easeInOut" }}
                    >
                        <div className="info_div1">
                            <div className="info_sub_part_div1">
                                <font className='font_menu_title_name'>
                                    Pramod
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                                <a href="tel:+919437415713" className="call_link">
                                    <div className="revolving-border">
                                        <IoCallOutline size={30} />
                                    </div>
                                </a>
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_menu_description'>
                                    +91 9437415713
                                </font>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </center>
        </main>
    );
}

export default ContactContent;
