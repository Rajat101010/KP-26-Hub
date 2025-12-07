import AppName from '../../../components/component/app_name.jsx';
import HeaderBus from '../../../components/component/header/header_bus.jsx'
import NowAllTitle from '../../../components/component/bus_components/bus_title/now_all_title__now.jsx';
import NowCampusTransport from '../../../components/component/bus_components/bus_content/now.jsx';

import FooterBus from '../../../components/component/footer/footer_bus.jsx'

import SwipePage from "../features/SwipePage_Bus";

function BusNow() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderBus />
                <NowAllTitle />
                <NowCampusTransport />
                <br /><br /><br /><br />

                <FooterBus />

            </main>
        </SwipePage>
    );
}

export default BusNow;

