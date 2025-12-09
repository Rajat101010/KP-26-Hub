import '../../css/hostel_components/content.css'
import { useState } from "react";

import Kiit from '../../../assets/kiit.png'
import AppQR from '../../../assets/app_qr.jpg'

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";



function HostelContent() {
    const [show, setShow] = useState(false);

    const handleOverlayClick = () => {
        setShow(false); // close when clicking outside image
    };

    const handleImageClick = (e) => {
        e.stopPropagation(); // prevent closing when clicking image
    };

    return (
        <main>
            <center>
                <div className='center_box'>
                    <div>
                        <img src={Kiit} alt="" className='kiit_logo' />
                    </div>
                    <div>
                        <font className='font_for_hostel_name_hostel'>
                            Kings Palace - 26
                        </font>
                        <br />
                        <font className='font_for_header_title_hostel'>
                            KIIT Internaltional Hostel
                        </font>
                    </div>
                    <div className='hostel_social_links'>
                        <a href="tel:+918114377672" className="call_link">
                            <IoCall size={25} className='social_logos' />
                        </a>
                        <a href="https://maps.app.goo.gl/qMbkLsJYdyygw8tR8">
                            <FaLocationDot size={25} className='social_logos' />
                        </a>
                        <a href="mailto:kingpalace.26@kiit.ac.in">
                            <IoMail size={25} className='social_logos' />
                        </a>
                    </div>
                    <div>
                        <div className='share_the_app' onClick={() => setShow(true)}>
                            <font className='share_the_qr_font'>
                                Share this App
                            </font> <IoQrCodeOutline size={25} />
                        </div>
                        {show && (
                            <div className="overlay" onClick={handleOverlayClick}>
                                <img
                                    src={AppQR}
                                    className="popup_image"
                                    onClick={handleImageClick}
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <div className='hostel_app_descriotion'>
                            <font className='font_hostel_description'>
                                <p>
                                    <b>KP-26 Hub</b> <br /> an application designed to provide hostel details, including food, transportation, and other essential information for all residents.
                                </p>
                            </font>
                        </div>
                    </div>
                </div>
            </center>
        </main>
    );
}

export default HostelContent;

