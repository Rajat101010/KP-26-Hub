import AppName from '../../../components/component/app_name.jsx';
import HeaderFood from '../../../components/component/header/header_food.jsx';
import DayTitleNormal from '../../../components/component/food_components/day_title/normal.jsx';
import FooterFood from '../../../components/component/footer/footer_food.jsx';

import dayjs from "dayjs";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function Food() {
    const days = dayjs().format("dddd").toLowerCase();

    return (
        <main>
            <AppName />
            <HeaderFood />
            <DayTitleNormal />
            <Navigate to={`/${days}`} />
            <br /><br /><br /><br />
            <FooterFood />
        </main>
    );
}

export default Food;

