import React, { useState } from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import s from "./Footer.module.css";
import { useEffect } from "react";

const Footer = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    let year = new Date().getFullYear();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    return (
        <section className="container-fluid">

            <div className={`container-lg flex-column flex-wrap justify-content-center text-center ${s.footer_content}`}>
                {/* Social Contact */}
                <div className="row">
                    <div className={`col-md-6 pt-3 ${s.col}`}>
                        <h4>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={["S", "O", "C", "I", "A", "L", "S"]}
                                idx={15}
                            />
                        </h4>
                        <div className={s.social_content}>
                            <a
                                href="https://www.linkedin.com/in/lorena-de-armas"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedinIn}
                                    className={s.icon_footer}
                                />
                            </a>

                            <a
                                href="https://github.com/LoreLor"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="/contact" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </a>
                        </div>
                        <div className={s.autor}>
                            <span>&#169;<strong> Lorena De Armas - {year}</strong></span>
                        </div>
                    </div>
                    {/* Links */}
                    <div className="col-md-6 pt-3">
                        <h4>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={["L", "I", "N", "K", "S"]}
                                idx={15}
                            />
                        </h4>
                        <div className={s.links_footer}>
                            <ul>
                                <li>
                                    <a href="#home">
                                        <span className="text-capitalize px-3">home</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        <span className="text-capitalize px-3">about me</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#skills">
                                        <span className="text-capitalize px-3">skills</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects">
                                        <span className="text-capitalize px-3">projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact">
                                        <span className="text-capitalize px-3">contact</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
