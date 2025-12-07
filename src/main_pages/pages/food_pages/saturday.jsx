import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleSaturday from '../../../components/component/food_components/day_title/saturday.jsx';
import SaturdayContent from '../../../components/component/food_components/day_content/saturday.jsx';

import FooterFood from '../../../components/component/footer/footer_food.jsx';

import SwipePage from "../features/SwipePage_Food";

function Saturday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <DayTitleSaturday />
                <SaturdayContent />
                <br /><br /><br /><br />

                <FooterFood />
            </main>
        </SwipePage>
    );
}

export default Saturday;

