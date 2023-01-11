import React from 'react';
import { NavLink, Link, useRouteMatch } from 'react-router-dom';

import logo from '../../images/header__logo.svg';
import navTabLinkAccountIcon from '../../images/nav-tab__link-account-icon.svg';

import './NavTab.css';
import './Header.css';

import data from "../../data/main.json";

function Header() {

  const name = data.user.name;
  
  return (  
    <header className={`header`}>
      <div className={`header__column`}>
        <img className="header__logo-img" src={logo} alt="Логотип" />
        <a to="/profile" className="nav-tab__link-account nav-tab__link-account_margin" activeClassName="nav-tab__link-account_active">
          <p className="nav-tab__link-account-text">{name}</p>
          <div className="nav-tab__link-account-overlay">
            <img className="nav-tab__link-account-icon" src={navTabLinkAccountIcon} alt="Икнока профиля" />
          </div>
        </a>
      </div>
    </header>
 
  );
}

export default Header;
/*       <NavTab />
    <header className={`header`}>
      <div className={`header__column`}>
        <div className="header__overlay">
          <Link to="/" className="header__logo">
            <img className="header__logo-img" src={logo} alt="Логотип" />
          </Link>
        </div>
 
      </div>
    </header>

*/