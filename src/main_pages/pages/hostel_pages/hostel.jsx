import AppName from '../../../components/component/app_name.jsx';
import HostelContent from '../../../components/component/hostel_components/content.jsx';
import FooterHostel from '../../../components/component/footer/footer_hostel.jsx';

import SwipePage from "../features/SwipePage_Food";

function Friday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HostelContent />
                <br /><br /><br /><br />

                <FooterHostel />
            </main>
        </SwipePage>
    );
}

export default Friday;
