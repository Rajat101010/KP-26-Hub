import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleSunday from '../../../components/component/food_components/day_title/sunday.jsx';
import SundayContent from '../../../components/component/food_components/day_content/sunday.jsx';

import FooterFood from '../../../components/component/footer/footer_food.jsx';

import SwipePage from "../features/SwipePage_Food";

function Sunday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <DayTitleSunday />
                <SundayContent />
                <br /><br /><br /><br />

                <FooterFood />
            </main>
        </SwipePage>
    );
}

export default Sunday;

