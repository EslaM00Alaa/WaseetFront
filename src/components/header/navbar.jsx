import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from './logo';
import './navbar.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsCollapsed(true);
  };

  return (
    <Navbar expand="lg" className="navbar-custom" expanded={!isCollapsed}>
      <Container>
        <Link onClick={() => setActiveLink(0)} className="navbar-brand" to="/">
          <Logo />
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsCollapsed(!isCollapsed)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto links">
            <Link
              onClick={() => handleLinkClick(0)}
              className={`nav-link ${activeLink === 0 ? 'active' : ''}`}
              to="/"
            >
              الرئيسيه
            </Link>
            <Link
              onClick={() => handleLinkClick(1)}
              className={`nav-link ${activeLink === 1 ? 'active' : ''}`}
              to="/sale"
            >
              بيع عقار
            </Link>
            <Link
              onClick={() => handleLinkClick(2)}
              className={`nav-link ${activeLink === 2 ? 'active' : ''}`}
              to="/buy"
            >
              شراء عقار
            </Link>
            <Link
              onClick={() => handleLinkClick(3)}
              className={`nav-link ${activeLink === 3 ? 'active' : ''}`}
              to="/hire"
            >
              ايجار عقار
            </Link>
            <Link
              onClick={() => handleLinkClick(4)}
              className={`nav-link ${activeLink === 4 ? 'active' : ''}`}
              to="/ask"
            >
              استشارة
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;