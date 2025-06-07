import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../component/navbar/Navbar.css';
import logo from './../../images/logo.png';
import toast from 'react-hot-toast';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faBook,
    faFileAlt,
    faQuestionCircle,
    faCommentDots
} from '@fortawesome/free-solid-svg-icons';


export default function Navbarr() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ logo } alt="Logo" />
        <span>EduPlay</span>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <di className={`nav-links ${menuOpen ? 'active' : ''}`}>
       <div className="navbar-heads">
                <Link to="/Home" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faHouse} className="navbar-icon" /> Home
                    </span>
                </Link>
                <Link to="/colleges" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faBook} className="navbar-icon" /> College
                    </span>
                </Link>
                <Link to="/notes" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faFileAlt} className="navbar-icon" /> Notes
                    </span>
                </Link>
                <Link to="/doubt" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faQuestionCircle} className="navbar-icon" /> Doubt
                    </span>
                </Link>
                <Link to="/feedback" className="link-nav">
                    <span className="navbar-link">
                        <FontAwesomeIcon icon={faCommentDots} className="navbar-icon" /> Feedback
                    </span>
                </Link>
            </div>
      </di>
    </nav>
  );
}
