import Header from "../components/header";
import "../components/header.css";

import NavSaturday from '../components/days_nav/nav_saturday';
import '../components/nav.css'

import SaturdayContent from '../components/days_content/saturday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Saturday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavSaturday />
        <br />
        <SaturdayContent />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Saturday;
