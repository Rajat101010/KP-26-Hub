import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleTuesday from '../../../components/component/food_components/day_title/tuesday.jsx';
import TuesdayContent from '../../../components/component/food_components/day_content/tuesday.jsx';

import FooterFood from '../../../components/component/footer/footer_food.jsx';

import SwipePage from "../features/SwipePage_Food";

function Tuesday() {
    return (
        <SwipePage>
            <main>
                <AppName />
                <HeaderFood />
                <DayTitleTuesday />
                <TuesdayContent />
                <br /><br /><br /><br />

                <FooterFood />
            </main>
        </SwipePage>
    );
}

export default Tuesday;

