import AppName from '../../../components/component/app_name.jsx';
import HeaderInfo from '../../../components/component/header/header_info.jsx';
import UpdateTitle from '../../../components/component/update_components/title.jsx';
import UpdateContent from '../../../components/component/update_components/content.jsx';

import FooterUpdate from '../../../components/component/footer/footer_update.jsx';

function Contact() {
    return (
        <main>
            <AppName />
            <HeaderInfo />
            <UpdateTitle />
            <UpdateContent />
            <br /><br /><br /><br />

            <FooterUpdate />
        </main>
    );
}

export default Contact;

