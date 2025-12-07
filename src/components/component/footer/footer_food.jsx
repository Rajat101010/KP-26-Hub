import '../../css/footer.css'

import { IoBusOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";

import { IoBusSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";

function FooterFood() {
    return (
        <main>
            <div className='footer_parent'>
                <a href="/">
                    <div className='footer_items'>
                        <center>
                            <IoBusOutline  size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Buses
                            </font>
                        </center>
                    </div>
                </a>
                <a href="/days">
                    <div className='footer_items'>
                        <center>
                            <IoFastFood size={20} className='footer_all_item footer_active_item' />
                            <br />
                            <font className='footer_item_font_active'>
                                Food
                            </font>
                        </center>
                    </div>
                </a>
                <a href="/update">
                    <div className='footer_items'>
                        <center>
                            <IoChatbubbleEllipsesOutline size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Update
                            </font>
                        </center>
                    </div>
                </a>
                <a href="/hostel">
                    <div className='footer_items'>
                        <center>
                            <PiBuildingApartment size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Hostel
                            </font>
                        </center>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default FooterFood;