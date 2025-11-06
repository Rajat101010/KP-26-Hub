import HeaderWM from './washing_machine_header';

import NavWM from './washing_machine_nav';
import './washing_machine.css'

import TitleTextWM from '../title_text_wm';

import WMBody from './washing_machine_content';

import Footer from '../footer_wm';

function Info() {
  return (
    <main>
      <div>
        <HeaderWM />
        <br />
        <NavWM />
        <br />
        <TitleTextWM />
        <WMBody />
        <br /><br /><br /><br />
        <Footer />
      </div>
    </main>
  );
}

export default Info;
