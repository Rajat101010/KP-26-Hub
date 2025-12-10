import { Link } from "react-router-dom";

import '../../../css/bus_components/now_all_title.css'

function NowAllTitle() {
    return (
        <main>
            <center>
                <div className='now_all_title_parent'>
                    <Link to="/">
                        <div className='now_all_title_all'>
                            <font className='page_nav_font'>
                                Now
                            </font>
                        </div>
                    </Link>
                    <Link to="/bus-all">
                        <div className='now_all_title_all now_all_title_active'>
                            <font className='page_nav_font_active'>
                                All
                            </font>
                        </div>
                    </Link>
                </div>
            </center>
        </main>
    );
}

export default NowAllTitle;