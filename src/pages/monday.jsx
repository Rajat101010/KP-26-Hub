import Header from "../components/header";
import "../components/header.css";

import NavMonday from "../components/days_nav/nav_monday";
import "../components/nav.css";

import MondayContent from "../components/days_content/monday_content";
import "../components/all_content.css";

import Footer from "../components/footer";
import "../components/footer.css";

import SwipePage from "../SwipePage";

function Monday() {
  return (
    <SwipePage>
      <main>
        <Header />
        <br />
        <NavMonday />
        <br />
        <MondayContent />
        <br /><br /><br /><br />
        <Footer />
      </main>
    </SwipePage>
  );
}

export default Monday;
