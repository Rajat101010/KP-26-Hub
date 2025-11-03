import HeaderBus from "../components/header_bus";
import "../components/header.css";

import NavC15 from "../components/for_bus_nav/nav_c_15_7_8";
import "../components/nav.css";

import C15BusContent from "../components/for_bus_content/nav_c_15_7_8_content";
import "../components/all_content.css";

import FooterBus from "../components/footer_bus";
import "../components/footer.css";

import SwipePageBus from "../SwipePageBus";

function C15Bus() {
    return (
        <SwipePageBus>
            <main>
                <HeaderBus />
                <br />
                <NavC15 />
                <br />
                <C15BusContent />
                <br /><br /><br /><br />
                <FooterBus />
            </main>
        </SwipePageBus>
    );
}

export default C15Bus;
