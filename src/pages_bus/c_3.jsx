import HeaderBus from "../components/header_bus";
import "../components/header.css";

import NavC3 from "../components/for_bus_nav/nav_c_3";
import "../components/nav.css";

import C3BusContent from "../components/for_bus_content/nav_c_3_content";
import "../components/all_content.css";

import FooterBus from "../components/footer_bus";
import "../components/footer.css";

import SwipePageBus from "../SwipePageBus";

function C3Bus() {
    return (
        <SwipePageBus>
            <main>
                <HeaderBus />
                <br />
                <NavC3 />
                <br />
                <C3BusContent />
                <br /><br /><br /><br />
                <FooterBus />
            </main>
        </SwipePageBus>
    );
}

export default C3Bus;
