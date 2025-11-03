import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";

function HeaderBus() {
  return (
    <main>
      <div className="header_top_for_all_pages">
        <div className='header_title_text'>
          <font className='font_app_name'>
            Flavora
          </font>
        </div>
        <div className='header_title_text'>
          <a href="/day">
            <div className="revolving-border">
              <IoFastFood />
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
            Bus Details
          </font>
        </div>
        <div className='header_second_div2'>
          <a href="/info-bus">
            <font className='font_info_icon'>
              <IoMdInformationCircleOutline />
            </font>
          </a>
        </div>
      </div>
    </main>
  );
}

export default HeaderBus;
