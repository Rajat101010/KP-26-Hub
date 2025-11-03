import HeaderBusInfo from "../components/header_bus_info";
import "../components/header.css";

import NavInfo from "../components/for_bus_nav/nav_info_bus";
import "../components/nav.css";

import TitleTextBus from '../components/title_text_info_bus';

import InfoBusBody from "../components/for_bus_content/info_bus_body";
import "../components/all_content.css";

import FooterBus from "../components/footer_bus";
import "../components/footer.css";


function NowBus() {
    return (
        <main>
            <HeaderBusInfo />
            <br />
            <NavInfo />
            <br />
            <TitleTextBus />
            <InfoBusBody />
            <br /><br /><br /><br />
            <FooterBus />
        </main>
    );
}

export default NowBus;
