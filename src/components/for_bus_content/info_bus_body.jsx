import { motion } from "framer-motion";

function InfoBusBody() {
    return (
        <main>
            <center>
                <div className="info_body_parent">
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                        <div className="info_body_div1_bus">
                            <div>
                                <font className='font_info_title_name'>
                                    Madana Sir
                                </font>
                            </div>
                            <div>
                                <font className='font_info_description'>
                                    +91 7978874274
                                    <br />
                                    +91 9583242237
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
                        <div className="info_body_div1_bus">
                            <div>
                                <font className='font_info_title_name'>
                                    Ananta
                                </font>
                            </div>
                            <div>
                                <font className='font_info_description'>
                                    +91 7473836490
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
                        <div className="info_body_div1_bus">
                            <div>
                                <font className='font_info_title_name'>
                                    Dipu
                                </font>
                            </div>
                            <div>
                                <font className='font_info_description'>
                                    +91 9861896984
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
                        <div className="info_body_div1_bus">
                            <div>
                                <font className='font_info_title_name'>
                                    Ajay
                                </font>
                            </div>
                            <div>
                                <font className='font_info_description'>
                                    +91 9776333782
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
                        <div className="info_body_div1_bus">
                            <div>
                                <font className='font_info_title_name'>
                                    Pramod
                                </font>
                            </div>
                            <div>
                                <font className='font_info_description'>
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

export default InfoBusBody;
