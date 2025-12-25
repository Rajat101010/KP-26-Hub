import { Link } from "react-router-dom";

import '../css/app_name.css'
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import { IoCall } from "react-icons/io5";
import { PiWashingMachineBold } from "react-icons/pi";
import { PiBowlFoodBold } from "react-icons/pi";

function AppName() {

  // const [showLinks, setShowLinks] = useState(false);

  const [showLinks, setshowLinks] = useState(false);

  const handleOverlayClickMenu = () => {
    setshowLinks(false); // close when clicking outside image
  };

  const handleImageClickMenu = (e) => {
    e.stopPropagation(); // prevent closing when clicking image
  };

  return (
    <main>
      <div className='app_name_parent'>
        <div className='app_name'>
          <font className='font_for_app_name'>
            KP-26 Hub
          </font>
        </div>

        <div
          className='app_name_menu no-highlight'
          onClick={() => setshowLinks(!showLinks)}
        >
          <font className='font_for_app_name_menu'>
            <AiOutlineMenu />
          </font>
        </div>
      </div>

      {showLinks && (
        <div className="overlay_title" onClick={handleOverlayClickMenu}>
          <div className="dropdown_box" onClick={handleImageClickMenu}>
            <Link to="/contact" className="dropdown_link no-highlight"><IoCall /> &nbsp;&nbsp;Contact</Link>
            <Link to="/washing-machine" className="dropdown_link no-highlight"><PiWashingMachineBold /> &nbsp;&nbsp;W.M. Time</Link>
            <Link to="/food-info" className="dropdown_link no-highlight"><PiBowlFoodBold /> &nbsp;&nbsp;Food Info</Link>
          </div>
        </div>
      )}

    </main>
  );
}

export default AppName;
