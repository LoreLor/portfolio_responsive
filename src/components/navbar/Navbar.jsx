import React from "react";
import logoL2 from "../../assets/images/logo-L2-rem.png";
import logoSub from "../../assets/images/logo_sub-Lorena-rem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faEnvelope,
    faFolderOpen,
    faHome,
    faScrewdriverWrench,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" id="navbar">
                <div className="container-fluid px-3">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logoL2}
                            alt="Logo de L"
                            className="logo-brand"
                        />
                    </a>
                    <button
                        className="navbar-toggler me-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span>
                            <FontAwesomeIcon icon={faBars} color="#f78324" />
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#home"
                                >
                                    <FontAwesomeIcon
                                        icon={faHome}
                                    />
                                <span className="text-capitalize px-3">home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                    />
                                    <span className="text-capitalize px-3">about me</span>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    <FontAwesomeIcon
                                        icon={faScrewdriverWrench}
                                    />
                                    <span className="text-capitalize px-3">skills</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">
                                    <FontAwesomeIcon
                                        icon={faFolderOpen}
                                    />
                                    <span className="text-capitalize px-3">projects</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
