
import Header from '../components/header';
import '../components/header.css'

import Nav from '../components/nav';
import '../components/nav.css'

import NormalBody from '../components/normal_body';
import '../components/normal_body.css'

import Footer from '../components/footer';
import '../components/footer.css'

function Home() {
  return (
    <main>
        <div>
            <Header />
            <br />
            <Nav />
            <br />
            <NormalBody />
            <br /><br /><br /><br />
            <Footer />
        </div>
    </main>
  );
}

export default Home;
