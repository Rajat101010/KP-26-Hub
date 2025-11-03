import Header from "../components/header";
import "../components/header.css";

import NavThursday from '../components/days_nav/nav_thursday';
import '../components/nav.css'

import ThursdayContent from '../components/days_content/thursday_content';
import '../components/all_content.css'

import Footer from '../components/footer';
import '../components/footer.css'

import SwipePage from "../SwipePage";

function Thursday() {
  return (
    <SwipePage>
      <main>
        <div>
          <Header />
          <br />
          <NavThursday />
          <br />
          <ThursdayContent />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </main>
    </SwipePage>
  );
}

export default Thursday;
