import HeaderBus from "../components/header_bus";
import "../components/header.css";

import NavC25 from "../components/for_bus_nav/nav_c_25";
import "../components/nav.css";

import C25BusContent from "../components/for_bus_content/nav_c_25_content";
import "../components/all_content.css";

import FooterBus from "../components/footer_bus";
import "../components/footer.css";

import SwipePageBus from "../SwipePageBus";

function C25Bus() {
    return (
        <SwipePageBus>
            <main>
                <HeaderBus />
                <br />
                <NavC25 />
                <br />
                <C25BusContent />
                <br /><br /><br /><br />
                <FooterBus />
            </main>
        </SwipePageBus>
    );
}

export default C25Bus;
