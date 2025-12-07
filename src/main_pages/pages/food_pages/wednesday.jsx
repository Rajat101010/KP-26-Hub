import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleWednesday from '../../../components/component/food_components/day_title/wednesday.jsx';
import WednesdayContent from '../../../components/component/food_components/day_content/wednesday.jsx';

import FooterFood from '../../../components/component/footer/footer_food.jsx';

import SwipePage from "../features/SwipePage_Food";

function Wednesday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <DayTitleWednesday />
                <WednesdayContent />
                <br /><br /><br /><br />

                <FooterFood />
            </main>
        </SwipePage>
    );
}

export default Wednesday;

