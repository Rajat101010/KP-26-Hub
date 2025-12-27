import { motion } from "framer-motion";

import "../../../../components/css/info_components/info_content.css";
import "../../../../components/css/info_components/RevolvingBorder.css";

function WashingMachineContent() {
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
                                    Monday to Saturday
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_info_description'>
                                    Time 1 &nbsp;&nbsp;&#9679;&nbsp;&nbsp; 9:00 to 13:00 <br />
                                    Time 2 &nbsp;&nbsp;&#9679;&nbsp;&nbsp; 15:00 to 18:00
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
                                    Only Sunday
                                </font>
                            </div>
                            <div className="info_sub_part_div2">
                            </div>
                            <div className="info_sub_part_div3">
                                <font className='font_info_description'>
                                    Time 1 &nbsp;&nbsp;&#9679;&nbsp;&nbsp; 9:00 to 13:00 <br />
                                    Time 2 &nbsp;&nbsp;&#9679;&nbsp;&nbsp; 15:00 to 19:00
                                </font>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </center>
        </main>
    );
}

export default WashingMachineContent;
