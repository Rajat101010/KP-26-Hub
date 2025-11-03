import { IoMdInformationCircle } from "react-icons/io";
import { FaBusAlt } from "react-icons/fa";

function Header() {
  return (
    <main>
      <div className="header_top_for_all_pages">
        <div className='header_title_text'>
          <font className='font_app_name'>
            Flavora
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
              <IoMdInformationCircle />
            </font>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Header;
