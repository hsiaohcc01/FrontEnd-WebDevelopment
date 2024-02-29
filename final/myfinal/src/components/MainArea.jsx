import Home from './Home';
import About from './About';
import Whalephoto from './whalephoto';
import '../static/css/Main.css'
import Killerwhale from './killerwhale'
import Bluewhale from './bluewhale'
import Finwhale from './finwhale';

function MainArea({ darkModeClass, page, changePage}) {
  return (
    <main id="main-content" className={`main ${darkModeClass}`}>
      { (page === '/') && <Home darkModeClass={darkModeClass} changePage={changePage}/> }
      { (page === '/about.html') && <About darkModeClass={darkModeClass}/> }
      { (page === '/whalephoto.html') && <Whalephoto darkModeClass={darkModeClass}/> }
      { (page === '/killerwhale.html') && <Killerwhale darkModeClass={darkModeClass}/> }
      { (page === '/bluewhale.html') && <Bluewhale darkModeClass={darkModeClass}/> }
      { (page === '/finwhale.html') && <Finwhale darkModeClass={darkModeClass}/> }
    </main>
  );
}

export default MainArea;
