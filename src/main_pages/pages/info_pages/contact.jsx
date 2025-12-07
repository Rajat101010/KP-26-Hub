import AppName from '../../../components/component/app_name.jsx';
import HeaderInfo from '../../../components/component/header/header_info.jsx';
import ContactTitle from '../../../components/component/info_components/info_title/contact.jsx';
import ContactContent from '../../../components/component/info_components/info_content/contact.jsx';

import FooterInfo from '../../../components/component/footer/footer_info.jsx';

function Contact() {
    return (
        <main>
            <AppName />
            <HeaderInfo />
            <ContactTitle />
            <ContactContent />
            <br /><br /><br /><br />

            <FooterInfo />
        </main>
    );
}

export default Contact;

