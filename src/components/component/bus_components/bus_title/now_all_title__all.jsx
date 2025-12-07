import '../../../css/bus_components/now_all_title.css'

function NowAllTitle() {
    return (
        <main>
            <center>
                <div className='now_all_title_parent'>
                    <a href="/">
                        <div className='now_all_title_all'>
                            <font className='page_nav_font'>
                                Now
                            </font>
                        </div>
                    </a>
                    <a href="/bus-all">
                        <div className='now_all_title_all now_all_title_active'>
                            <font className='page_nav_font_active'>
                                All
                            </font>
                        </div>
                    </a>
                </div>
            </center>
        </main>
    );
}

export default NowAllTitle;