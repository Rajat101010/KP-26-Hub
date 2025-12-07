import AppName from '../../../components/component/app_name.jsx';
import HeaderInfo from '../../../components/component/header/header_info.jsx';
import WashingMachineTitle from '../../../components/component/info_components/info_title/washing_m.jsx';
import WashingMachineContent from '../../../components/component/info_components/info_content/washing_m.jsx';

import FooterInfo from '../../../components/component/footer/footer_info.jsx';

function Contact() {
    return (
        <main>
            <AppName />
            <HeaderInfo />
            <WashingMachineTitle />
            <WashingMachineContent />
            <br /><br /><br /><br />

            <FooterInfo />
        </main>
    );
}

export default Contact;

