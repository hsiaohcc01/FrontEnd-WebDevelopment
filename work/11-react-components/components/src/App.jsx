import './static/css/App.css';
import { useState } from 'react';
import Button from "./Button";

import Header from './Header';
import MainArea from './MainArea';
import Footer from './Footer';

function App() {

  const [page, setPage] = useState('/');

  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }

  return (
    <div className="app">
      <Header onNav={onNav} />
      <MainArea page={page} onNav={onNav} />
      <Footer />
      <Button visual="link" >Example link</Button>
      <Button visual="button" >Example button</Button>
      <form onSubmit={e => e.preventDefault()}>
          <label>
              Name:
              <input type="text" name="name" />
          </label>
          <Button visual="link" type="submit">Example submit</Button>
      </form>
    </div>
  );
}

export default App;
