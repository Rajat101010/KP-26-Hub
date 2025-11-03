import { motion } from "framer-motion";
import Header from "../components/header";
import "../components/header.css";

import NavSunday from '../components/days_nav/nav_sunday';
import '../components/nav.css'

import SundayContent from '../components/days_content/sunday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Sunday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavSunday />
        <br />
        <SundayContent />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Sunday;
