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
import yo from "../../assets/images/yo-transparente.png";
import pdf from "../../assets/images/resume-cv-2023.pdf";
import s from "./About.module.css";
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
            <section id="about" className={`container ${s.about_page}`}>
                <div className={`${s.about_text} text-center`}>
                    <h2>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={["A", "B", "O", "U", "T", " ", "M", "E"]}
                            idx={15}
                        />
                    </h2>

                    <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-3">
                        <div className="col">
                            <img
                                src={yo}
                                alt="photo_perfil"
                                className="d-flex flex-column"
                            />
                        </div>

                        <div className="col">
                            <p>
                                Hola, soy Full Stack Developer con background en
                                Ciencias Contables, Ingeniería Civil, Dirección
                                y Gestión de Organismos Deportivos de Alto
                                Rendimiento.
                            </p>
                            <p>
                                Experiencia de trabajo bajo el marco 
                                Scrum. Conocimiento en el manejo de
                                techs como:{" "}
                                <strong>
                                    React, Redux, NodeJs, Express, Sequelize,
                                    Angular, Spring Boot, Maven, REST, MySQL,
                                    PostgreSQL, HTML, CSS, Docker, AWS ...
                                </strong>
                                , estructuras <strong>Monolíticas</strong> y de{" "}
                                <strong>Microservicios</strong>
                            </p>
                            <p>
                                Diseño, desarrollo y despliegue de aplicaciones,
                                imprimiendo pensamiento creativo, resolución de
                                problemas, trabajo en equipo, comunicación y
                                autonomía.
                            </p>
                        </div>
                        <div className="col">
                            <a className={s.btn_2}
                                href={pdf}
                                target="_blank">
                                RESUME - PDF
                            </a>
                        </div>
                    </div>

                    </div>
            </section>
            {/* <Loader type="line-scale" color='#f78324'/> */}
        </>
    );
};

export default About;
