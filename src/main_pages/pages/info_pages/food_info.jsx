import AppName from '../../../components/component/app_name.jsx';
import HeaderInfo from '../../../components/component/header/header_info.jsx';
import FoodInfoTitle from '../../../components/component/info_components/info_title/food_info.jsx';
import FoodContent from '../../../components/component/info_components/info_content/food_info.jsx';

import FooterInfo from '../../../components/component/footer/footer_info.jsx';

function Contact() {
    return (
        <main>
            <AppName />
            <HeaderInfo />
            <FoodInfoTitle />
            <FoodContent />
            <br /><br /><br /><br />

            <FooterInfo />
        </main>
    );
}

export default Contact;

