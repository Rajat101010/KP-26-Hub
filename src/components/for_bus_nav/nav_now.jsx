import { FaArrowRightArrowLeft } from "react-icons/fa6";

function NavNow() {
    return (
        <main>
            <center>
                <div className="nav_parent_bus">
                    <a href="/bus-now" className="weel_links">
                        <div className="nav_div1_bus active">Now</div>
                    </a>
                    <a href="/bus-c_25" className="weel_links">
                        <div className="nav_div2_bus">H <FaArrowRightArrowLeft /> C 25</div>
                    </a>
                    <a href="/bus-c_15_7_8" className="weel_links">
                        <div className="nav_div2_bus">H <FaArrowRightArrowLeft /> C 15,7,8</div>
                    </a>
                    <a href="/bus-c_3" className="weel_links">
                        <div className="nav_div2_bus">H <FaArrowRightArrowLeft /> C 3</div>
                    </a>
                </div>
                <hr className='hr_for_all_Pages' />
            </center>
        </main>
    );
}

export default NavNow;
