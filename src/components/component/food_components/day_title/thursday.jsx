import '../../../css/food_components/day_title.css'

function DayTitleThursday() {
    return (
        <main>
            <center>
                <div className='day_title_parent'>
                    <a href="/sunday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Sun
                            </font>
                        </div>
                    </a>
                    <a href="/monday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Mon
                            </font>
                        </div>
                    </a>
                    <a href="/tuesday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Tue
                            </font>
                        </div>
                    </a>
                    <a href="/wednesday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Wed
                            </font>
                        </div>
                    </a>
                    <a href="/thursday">
                        <div className='day_title_all day_title_active'>
                            <font className='page_nav_font_active'>
                                Thu
                            </font>
                        </div>
                    </a>
                    <a href="/friday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Fri
                            </font>
                        </div>
                    </a>
                    <a href="/saturday">
                        <div className='day_title_all'>
                            <font className='page_nav_font'>
                                Sat
                            </font>
                        </div>
                    </a>
                </div>
            </center>
        </main>
    );
}

export default DayTitleThursday;