import React  from 'react';
import logo from '../images/okuklu.png';
import { FiChevronDown } from 'react-icons/fi';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const showDropdownAbout = (e) => {
    const aboutList = document.querySelector('.about-list');

    e.preventDefault();
    aboutList.classList.toggle('show-list');
  };

  const showDropdownCareer = (e) => {
    const careerList = document.querySelector('.career-list');

    e.preventDefault();
    careerList.classList.toggle('show-list');
  };

  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      
    });
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-0">
         <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" className="img-fluid" />
        </Link>
      <div className="container text-light">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Ana səhifə
              </Link>
            </li>
            <li className="nav-item product-dropdown">
              <Link to="/" className="nav-link" aria-current="page">
                Məhsullar <FiChevronDown />
              </Link>
              <ul className="product-list">
                <li>
                  <Link to="/about">Kafel-Metlax</Link>
                </li>
                <li>
                  <Link to="/whyus">Keramoqranit</Link>
                </li>
                <li>
                  <Link to="/managment">Laminat və Parket</Link>
                </li>
                <li>
                  <Link to="/managment">Santexnika məhsulları</Link>
                </li>
                <li>
                  <Link to="/managment">Divar kağızları</Link>
                </li>
                <li>
                  <Link to="/managment">Qapılar</Link>
                </li>
                <li>
                  <Link to="/managment">Mebellər</Link>
                </li>
                <li>
                  <Link to="/managment">Çini qablar</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item about-dropdown">
              <Link
                to="/about"
                className="nav-link about-link"
                onClick={showDropdownAbout}
              >
                Haqqımızda <FiChevronDown />
              </Link>
              <ul className="about-list">
                <li>
                  <Link to="/about">Haqqımızda</Link>
                </li>
                <li>
                  <Link to="/whyus">Niyə Biz ?</Link>
                </li>
                <li>
                  <Link to="/managment">İdarə Heyəti</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item service-dropdown">
              <Link to="/service" className="nav-link">
                Xidmətlərimiz
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                Media və Xəbərlər
              </Link>
            </li>
            <li className="nav-item career-dropdown">
              <Link to="/career" className="nav-link" onClick={showDropdownCareer}>
                Karyera <FiChevronDown />
              </Link>
              <ul className="career-list">
                <li>
                  <Link to="/humanresources">İnsan Resursları siyasətimiz</Link>
                </li>
                <li>
                  <Link to="/about">Vakansiyalar</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Əlaqə
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
