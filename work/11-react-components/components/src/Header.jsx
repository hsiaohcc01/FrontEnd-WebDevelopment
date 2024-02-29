import './static/css/Header.css'
import GlobalNav from './GlobalNav';
import CatLogo from './static/images/logo.jpg'

function Header({ onNav }) {
  return (
    <header className="header">
      <img
        src={CatLogo}
        className="header__logo"
        alt="CatLogo"
      />
      <h1 className="header__title">
        Welcome to Cats World
      </h1>
      <GlobalNav onNav={onNav} className="header__nav" />
    </header>
  );
}
export default Header;