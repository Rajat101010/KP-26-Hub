import Header from "../components/header";
import "../components/header.css";

import NavWednesday from '../components/days_nav/nav_wednesday';
import '../components/nav.css'

import WednesdayContent from '../components/days_content/wednesday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Wednesday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavWednesday />
        <br />
        <WednesdayContent />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Wednesday;
