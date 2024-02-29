import './static/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list footer__media">
        <li><a href="/">Instagram</a></li>
        <li><a href="/">Twitter</a></li>
      </ul>
      <ul className="footer__list footer__policy">
        <li><a href="/">Privacy</a></li>
        <li><a href="/">Documents</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
