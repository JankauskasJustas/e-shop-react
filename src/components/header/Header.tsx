import "./Header.css";
import logo from "../../assets/nba-logo.svg";

const Header = () => {
  return (
    <header className="header header--sticky header--rounded">
      <div className="header__main-header inline-flex full-width">
        <img className="logo-img" src={logo} alt="Logo" />
        <div>
          <input type="text" placeholder="Search..." />
          <a className="link-item" href="/#">
            Login
          </a>
        </div>
      </div>
      <div className="header__second-header inline-flex full-width space-evenly">
        <a className="link-item" href="/#">
          Home
        </a>
        <a className="link-item" href="/#">
          About
        </a>
        <a className="link-item" href="/#">
          Players
        </a>
        <a className="link-item" href="/#">
          Merch
        </a>
      </div>
    </header>
  );
};

export default Header;
