import Logo from "../Assets/bus-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="hero-section">
      <header>
        <div className="logo">
          <img className="img-logo" src={Logo} alt="Logo"></img>
          <h1 className="logo-txt">
            <a href="#sample">Himalayan Express Bus Service</a>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#sample">Book a ticket</a>
            </li>
            <li>
              <a href="#sample">Search your ticket</a>
            </li>
            <li>
              <a href="#sample">FAQ</a>
            </li>
            <li>
              <a href="#sample">Help</a>
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;