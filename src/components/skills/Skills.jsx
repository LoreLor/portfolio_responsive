import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import VanillaTilt from "vanilla-tilt";
import CardSkill from "./cardSkill/CardSkill";
import { allSkills } from "../../store/actions/skills";
import s from "./Skills.module.css";
import Loader from "react-loaders";

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.skills.skills);

    const [letterClass, setLetterClass] = useState("text-animate");
    const [animateTitle, setAnimateTitle] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Efecto animatedLetter de los titulos
    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (!aboutSection) return;
            // devuelve el tamaño del elemento y su posicion relativa
            const rect = aboutSection.getBoundingClientRect();
            // Verifica si la parte superior de la sección está en el campo de visión
            if (rect.top <= window.innerHeight * 0.4) {
                setAnimateTitle(true);
            } else {
                setAnimateTitle(false);
            }
        };
        //agrego escuchador al scroll
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (skills.length > 0) {
            setIsLoading(false);
        }
    }, [skills]);

    

    // Efecto tilt de la card
    useEffect(() => {
        const wrapper = document.querySelectorAll(".wrapper");

        if (wrapper.length) {
            Array.from(wrapper).forEach((wrapp) => {
                VanillaTilt.init(wrapp, {
                    max: 25,
                    speed: 400,
                    startX: -10,
                    startY: -8,
                    glare: true,
                    "max-glare": 0.5,
                });
            });

            return () => {
                Array.from(wrapper).forEach((wrapp) => {
                    if (wrapp.VanillaTilt) {
                        wrapp.VanillaTilt.destroy();
                    }
                });
            };
        }
    }, [skills]);

    return (
        <>
            <section id="skills">
                <div className={`container ${s.skills_page}`}>
                    <div className={s.skill_text}>
                        <h2>
                            {animateTitle ? (
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={[
                                        "M",
                                        "Y",
                                        " ",
                                        "S",
                                        "K",
                                        "I",
                                        "L",
                                        "L",
                                        "S",
                                    ]}
                                    idx={15}
                                />
                            ) : null}
                        </h2>
                    </div>
                    {isLoading ? (
                        <Loader type="line-scale" color="#f78324" />
                    ) : (
                        <div className={`container ${s.skill_container}`}>
                            <div className="row row-cols-md-4 row-cols-lg-6 g-3 align-content-center justify-content-center align-items-center">
                                {skills &&
                                    skills.map((s, index) => (
                                        <div
                                            className="col"
                                        >
                                            <CardSkill
                                                key={s.name}
                                                name={s.name}
                                                image={s.image}
                                                className="wrapper"
                                                // data-aos={
                                                //     index % 2 === 0
                                                //         ? "fade-left"
                                                //         : "fade-right"
                                                // }
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Skills;
