function NavMonday() {
    return (
        <main>
            <center>
                <div className="nav_parent">
                    <a href="/monday" className="weel_links">
                        <div className="nav_div1 active">Mon</div>
                    </a>
                    <a href="/tuesday" className="weel_links">
                        <div className="nav_div2">Tue</div>
                    </a>
                    <a href="/wednesday" className="weel_links">
                        <div className="nav_div3">Wed</div>
                    </a>
                    <a href="/thursday" className="weel_links">
                        <div className="nav_div4">Thu</div>
                    </a>
                    <a href="/friday" className="weel_links">
                        <div className="nav_div5">Fri</div>
                    </a>
                    <a href="/saturday" className="weel_links">
                        <div className="nav_div6">Sat</div>
                    </a>
                    <a href="/sunday" className="weel_links">
                        <div className="nav_div7">Sun</div>
                    </a>
                </div>
                <hr className='hr_for_all_Pages' />
            </center>
        </main>
    );
}

export default NavMonday;
