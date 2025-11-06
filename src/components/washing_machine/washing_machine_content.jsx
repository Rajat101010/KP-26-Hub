import { motion } from "framer-motion";

function InfoBody() {
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
                        <div className="info_body_div1">
                            <font className='font_info_title_name'>
                                Monday - Saturday
                            </font>
                            <br />
                            <font className='font_info_description'>
                                <table>
                                    <tr>
                                        <td>Timing 1:-</td>
                                        <td>9:00 to 13:00</td>
                                    </tr>
                                    <tr>
                                        <td>Timing 2:-</td>
                                        <td>15:00 to 18:00</td>
                                    </tr>
                                </table>
                            </font>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <div className="info_body_div2">
                            <font className='font_info_title_name'>
                                Sunday
                            </font>
                            <br />
                            <font className='font_info_description'>
                                <table>
                                    <tr>
                                        <td>Timing 1:-</td>
                                        <td>9:00 to 13:00</td>
                                    </tr>
                                    <tr>
                                        <td>Timing 2:-</td>
                                        <td>15:00 to 19:00</td>
                                    </tr>
                                </table>
                            </font>
                        </div>
                    </motion.div>
                </div>
            </center>
        </main>
    );
}

export default InfoBody;
