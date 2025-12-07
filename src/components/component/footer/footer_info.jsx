import '../../css/footer.css'

import { IoBusOutline } from "react-icons/io5";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";

import { IoBusSharp } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";

function FooterInfo() {
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
                <a href="/day">
                    <div className='footer_items'>
                        <center>
                            <IoFastFoodOutline size={20} className='footer_all_item' />
                            <br />
                            <font className='footer_item_font'>
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

export default FooterInfo;