import Header from "../components/header";
import "../components/header.css";

import NavFriday from '../components/days_nav/nav_friday';
import '../components/nav.css'

import FridayContent from '../components/days_content/friday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Friday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavFriday />
        <br />
        <FridayContent />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Friday;
