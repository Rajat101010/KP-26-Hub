import '../css/app_name.css'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import { IoCall } from "react-icons/io5";
import { PiWashingMachineBold } from "react-icons/pi";
import { PiBowlFoodBold } from "react-icons/pi";

function AppName() {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <main>
      <div className='app_name_parent'>
        <div className='app_name'>
          <font className='font_for_app_name'>
            KP-26 Hub
          </font>
        </div>

        <div 
          className='app_name_menu'
          onClick={() => setShowLinks(!showLinks)}
        >
          <font className='font_for_app_name_menu'>
            <AiOutlineMenu />
          </font>
        </div>
      </div>

      {showLinks && (
        <div className="dropdown_box">
          <a href="/contact" className="dropdown_link"><IoCall /> &nbsp;&nbsp;Contact</a>
          <a href="/washing-machine" className="dropdown_link"><PiWashingMachineBold /> &nbsp;&nbsp;W.M. Time</a>
          <a href="/food-info" className="dropdown_link"><PiBowlFoodBold /> &nbsp;&nbsp;Food Info</a>
        </div>
      )}

    </main>
  );
}

export default AppName;
