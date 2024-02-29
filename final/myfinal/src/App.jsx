import React, { useState, useRef } from 'react';
import './static/css/App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import LoginModal from './components/LoginModal';

function App() {
  const [state, setState] = useState({
    page: '/',
    theme: 'light',
    isLogin: false,
    user: {},
  });
  const { page, theme, isLogin, user } = state;
  const loginFormRef = useRef(null);
  const darkModeClass = theme === 'dark' ? 'dark' : '';

  const onNav = (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setState((prevState) => ({ ...prevState, page: target }));
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setState((prevState) => ({ ...prevState, theme: newTheme }));
  };

  const changePage = (newPage) => {
    setState((prevState) => ({ ...prevState, page: newPage }));
  };

  return (
    <div className="app">
      <a href="" tabIndex="1" className="skip-link" aria-label="skip">
        Skip to main content
      </a>
      <Header onNav={onNav} isLogin={isLogin} user={user} loginFormRef={loginFormRef} />
      <MainArea darkModeClass={darkModeClass} page={page} user={user} isLogin={isLogin} changePage={changePage} />
      <LoginModal loginFormRef={loginFormRef} setIsLogin={(value) => setState((prevState) => ({ ...prevState, isLogin: value }))} setUser={(newUser) => setState((prevState) => ({ ...prevState, user: newUser }))} />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <Footer />
    </div>
  );
}

export default App;