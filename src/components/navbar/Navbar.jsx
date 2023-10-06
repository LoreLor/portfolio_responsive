import React, { useState } from "react";
import logoL2 from "../../assets/images/logo-L2-rem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faUser, faScrewdriverWrench, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import s from "./Navbar.module.css";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${s.navbar} navbar-expand-lg fixed-top ${s.navbar_expand_lg}`} id="navbar">
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="#">
                    <img src={logoL2} alt="Logo de L" className={s.logo_brand} />
                </a>
                <button
                    className={`navbar-toggler ${s.navbar_toggler} me-3 ${isMenuOpen ? "collapsed" : ""}`}
                    type="button"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span>
                        <FontAwesomeIcon icon={faBars} color="#f78324" />
                    </span>
                </button>
                <div className={`collapse navbar-collapse ${s.navbar_collapse} ${isMenuOpen ? "show" : ""}`} id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end">
                        <li className={`nav-item ${s.nav_item}`}>
                            <a
                                className={`${s.nav_link} nav-link active`}
                                href="#home"
                                onClick={closeMenu}
                            >
                                <FontAwesomeIcon icon={faHome} />
                                <span className="text-capitalize px-3">home</span>
                            </a>
                        </li>
                        <li className={`${s.nav_item} nav-item`}>
                            <a
                                className={`${s.nav_link} nav-link`}
                                href="#about"
                                onClick={closeMenu}
                            >
                                <FontAwesomeIcon icon={faUser} />
                                <span className="text-capitalize px-3">about me</span>
                            </a>
                        </li>
                        <li className={`${s.nav_item} nav-item`}>
                            <a
                                className={`${s.nav_link} nav-link active`}
                                href="#skills"
                                onClick={closeMenu}
                            >
                                <FontAwesomeIcon icon={faScrewdriverWrench} />
                                <span className="text-capitalize px-3">skills</span>
                            </a>
                        </li>
                        <li className={`${s.nav_item} nav-item`}>
                            <a
                                className={`${s.nav_link} nav-link active`}
                                href="#projects"
                                onClick={closeMenu}
                            >
                                <FontAwesomeIcon icon={faFolderOpen} />
                                <span className="text-capitalize px-3">projects</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
