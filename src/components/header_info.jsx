import { BiSolidInfoSquare } from "react-icons/bi";
import { FaBusAlt } from "react-icons/fa";
import { PiWashingMachine } from "react-icons/pi";

function Header() {
  return (
    <main>
      <div className="header_top_for_all_pages">
        <div className='header_title_text'>
          <font className='font_app_name'>
            <a href="/admin">
              KP-26 Hub
            </a>
          </font>
        </div>
        <div className='header_title_text'>
          <a href="/bus-now">
            <div className="revolving-border">
              <FaBusAlt />
            </div>
          </a>
        </div>
      </div>
      <div className='header_second_parent'>
        <div className='header_intro'>
          <font className='font_hostel_name'>
            Kings Palace - 26
          </font>
          <br />
          <font className='font_mess_menu'>
            Mess Menu
          </font>
        </div>
        <div className='header_second_div2'>
          <a href="/info">
            <font className='font_info_icon'>
              <BiSolidInfoSquare />
            </font>
          </a>
          <a href="/washing-machine">
            <font className='font_info_icon'>
              <PiWashingMachine />
            </font>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Header;
