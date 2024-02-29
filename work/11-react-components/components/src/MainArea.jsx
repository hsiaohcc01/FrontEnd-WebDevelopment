import Home from './Home';
import About from './About';
import Cats from './Cats';

function MainArea({ page, onNav }) {

  return (
    <main>
      { (page === '/') && <Home onNav={onNav}/> }
      { (page === '/about.html') && <About/> }
      { (page === '/cats.html') && <Cats/> }
    </main>
  );
}

export default MainArea;
