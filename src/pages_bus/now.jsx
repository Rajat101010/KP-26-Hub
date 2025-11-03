import HeaderBus from "../components/header_bus";
import "../components/header.css";

import NavNow from "../components/for_bus_nav/nav_now";
import "../components/nav.css";

import NowContent from "../components/for_bus_content/nav_now_content";
import "../components/all_content.css";

import FooterBus from "../components/footer_bus";
import "../components/footer.css";

import SwipePageBus from "../SwipePageBus";

function NowBus() {
    return (
        <SwipePageBus>
            <main>
                <HeaderBus />
                <br />
                <NavNow />
                <br />
                <NowContent />
                <br /><br /><br /><br />
                <FooterBus />
            </main>
        </SwipePageBus>
    );
}

export default NowBus;
