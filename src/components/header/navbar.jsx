import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from './logo';
import "./navbar.css";

const NavBar = () => {
const [activeLink, setActiveLink] = useState(0);


return (
<Navbar expand="lg" className="navbar-custom">
<Container>
<Link onClick={()=>setActiveLink(0)} className='navbar-brand' to="/"><Logo/></Link>

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto links">
<Link
onClick={()=>setActiveLink(0)}
className={`nav-link ${activeLink === 0 ? 'active' : ''}`}
to="/"
>
الرئيسيه
</Link>
<Link
onClick={()=>setActiveLink(1)}
className={`nav-link ${activeLink === 1 ? 'active' : ''}`}
to="/sale"
>
بيع عقار
</Link>
<Link
onClick={()=>setActiveLink(2)}
className={`nav-link ${activeLink === 2 ? 'active' : ''}`}
to="/buy"
>
شراء عقار
</Link>
<Link
onClick={()=>setActiveLink(3)}
className={`nav-link ${activeLink === 3 ? 'active' : ''}`}
to="/hire"

>
ايجار عقار
</Link>
<Link
onClick={()=>setActiveLink(4)}
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