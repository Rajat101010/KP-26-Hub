import { RiAdminFill } from "react-icons/ri";

function HeaderAdmin() {
    return (
        <main>
            <div className="header_top_for_all_pages">
                <div className='header_title_text'>
                    <font className='font_app_name'>
                        KP-26 Hub
                    </font>
                </div>
                <div className='header_title_text'>
                    <div className="revolving-border">
                        <RiAdminFill />
                    </div>
                </div>
            </div>
            <div className='header_second_parent'>
                <div className='header_intro'>
                    <font className='font_hostel_name'>
                        Kings Palace - 26
                    </font>
                    <br />
                    <font className='font_mess_menu'>
                        Admin Control Panel
                    </font>
                </div>
            </div>
            <br />
            <hr className='hr_for_all_Pages' />
        </main>
    );
}

export default HeaderAdmin;
