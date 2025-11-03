import HeaderInfo from '../components/header_info';
import '../components/header.css'

import Nav from '../components/nav';
import '../components/nav.css'

import TitleText from '../components/title_text_info';

import InfoBody from '../components/info_body';
import '../components/info_body.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Home() {
  return (
    <main>
      <div>
        <HeaderInfo />
        <br />
        <Nav />
        <br />
        <TitleText />
        <InfoBody />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
