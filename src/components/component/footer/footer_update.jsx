import { Link } from "react-router-dom";

import '../../css/footer.css'

import { IoBusOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";

import { IoBusSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";

function FooterUpdate() {
    return (
        <main>
            <div className='footer_parent'>
                <Link to="/">
                    <div className='footer_items'>
                        <center>
                            <IoBusOutline  size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Buses
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/days">
                    <div className='footer_items'>
                        <center>
                            <IoFastFoodOutline size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Food
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/update">
                    <div className='footer_items'>
                        <center>
                            <IoChatbubbleEllipses size={20} className='footer_all_item footer_active_item' />
                            <br />
                            <font className='footer_item_font_active'>
                                Update
                            </font>
                        </center>
                    </div>
                </Link>
                <Link to="/hostel">
                    <div className='footer_items'>
                        <center>
                            <PiBuildingApartment size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
                                Hostel
                            </font>
                        </center>
                    </div>
                </Link>
            </div>
        </main>
    );
}

export default FooterUpdate;