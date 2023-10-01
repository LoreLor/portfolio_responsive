import React, { useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngular,
    faHtml5,
    faJava,
    faJs,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import yo from "../../assets/images/yo2.png";
import pdf from "../../assets/images/resume-cv-2023.pdf";
import "./About.css";
import "../animatedLetters/AnimatedLetters.scss";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    return (
        <>
            <section id="about" className="container about-page">
                <div className="title-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                            idx={15}
                        />
                    </h1>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                                <img src={yo} alt="photo_perfil" className="photo" />
                                <p>
                                    Full Stack Developer con formación en Ciencias
                                    Contables, Ingeniería Civil, Dirección y Gestión de
                                    Organismos Deportivos de Alto Rendimiento.
                                </p>
                                <p>
                                    Experiencia en el marco de desarrollo trabajando con
                                    techs como{" "}
                                    <strong>
                                        NodeJS, React, Redux, NodeJs, Express, Sequelize,
                                        Angular, SpringBoot, Maven, MySQL, PostgreSQL
                                    </strong>
                                    , entre otras tecnologías del sector.
                                </p>
                                <p>
                                    Diseño, desarrollo y despliegue de aplicaciones,
                                    imprimiendo pensamiento creativo, resolución de
                                    problemas, trabajo en equipo, comunicación y autonomía.
                                </p>
                            </div>
                            <div className="col">
                            <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#00b1dd" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faNodeJs} color="#00dd6f" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJava} color="#dd007a" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faHtml5} color="#0072dd" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faJs} color="#f7eb49" />
                        </div>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                    
                    

                    <a
                        className="flat-button"
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        RESUME-PDF
                    </a>
                </div>
                
            </section>
            <Loader type="line-scale" />
        </>
    );
};

export default About;
