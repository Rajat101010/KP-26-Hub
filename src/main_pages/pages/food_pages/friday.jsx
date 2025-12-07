import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleFriday from '../../../components/component/food_components/day_title/friday.jsx';
import FridayContent from '../../../components/component/food_components/day_content/friday.jsx';

import FooterFood from '../../../components/component/footer/footer_food.jsx';

import SwipePage from "../features/SwipePage_Food";

function Friday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <DayTitleFriday />
                <FridayContent />
                <br /><br /><br /><br />

                <FooterFood />
            </main>
        </SwipePage>
    );
}

export default Friday;

