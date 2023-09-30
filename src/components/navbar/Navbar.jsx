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
            <nav className="navbar navbar-expand-lg fixed-top mb-3" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logoL2}
                            alt="Logo de L"
                            className="logo-brand"
                        />
                    </a>
                    <button
                        className="navbar-toggler"
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
                        <ul class="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    exact="true"
                                    href="#home"
                                    data-target="home"
                                >
                                    <FontAwesomeIcon
                                        icon={faHome}
                                        color="#f78324"
                                    />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        color="#f78324"
                                    />
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">
                                    <FontAwesomeIcon
                                        icon={faScrewdriverWrench}
                                        color="#f78324"
                                    />
                                </a>
                            </li>
                            <li classname="nav-item">
                                <a className="nav-link" href="#projects">
                                    <FontAwesomeIcon
                                        icon={faFolderOpen}
                                        color="#f78324"
                                    />
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
