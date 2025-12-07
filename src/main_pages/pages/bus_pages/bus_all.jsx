import AppName from '../../../components/component/app_name.jsx';
import HeaderBus from '../../../components/component/header/header_bus.jsx'
import NowAllTitle from '../../../components/component/bus_components/bus_title/now_all_title__all.jsx';
import AllCampusTransport from '../../../components/component/bus_components/bus_content/all.jsx';

import FooterBus from '../../../components/component/footer/footer_bus.jsx'

import SwipePage from "../features/SwipePage_Bus";

function BusAll() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderBus />
                <NowAllTitle />
                <AllCampusTransport />
                <br /><br /><br /><br />

                <FooterBus />

            </main>
        </SwipePage>
    );
}

export default BusAll;

