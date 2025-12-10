import { Link } from "react-router-dom";

import '../../../css/food_components/day_title.css'

function DayTitleSunday() {
    return (
        <main>
            <center>
                <div className='day_title_parent'>
                    <Link to="/sunday">
                        <div className='day_title_all day_title_active'>
                            <font className='page_nav_font_active'>
                                Sun
                            </font>
                        </div>
                    </Link>
                    <Link to="/monday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Mon
                            </font>
                        </div>
                    </Link>
                    <Link to="/tuesday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Tue
                            </font>
                        </div>
                    </Link>
                    <Link to="/wednesday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Wed
                            </font>
                        </div>
                    </Link>
                    <Link to="/thursday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Thu
                            </font>
                        </div>
                    </Link>
                    <Link to="/friday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Fri
                            </font>
                        </div>
                    </Link>
                    <Link to="/saturday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Sat
                            </font>
                        </div>
                    </Link>
                </div>
            </center>
        </main>
    );
}

export default DayTitleSunday;