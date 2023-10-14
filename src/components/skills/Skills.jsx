import React, { Fragment, useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import VanillaTilt from "vanilla-tilt";
import CardSkill from "./cardSkill/CardSkill";
//import { useDispatch, useSelector } from "react-redux";
//import { getSkills } from "../../redux/actions/skill";

import image from "../../assets/images/react-trnsparente.png";
import s from "./Skills.module.css";
import { useDispatch, useSelector } from "react-redux";
import { allSkills } from "../../store/actions/skills";


const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector(state => state.skills.skills)
    
    const [letterClass, setLetterClass] = useState("text-animate");
    const [animateTitle, setAnimateTitle] = useState(false);

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
        dispatch(allSkills())
    }, []);

    // Efecto tilt de la card
    useEffect(() => {
        const wrapper = document.querySelectorAll(".wrapper");
        //console.log("Wrappers:", wrapper);
        if (wrapper) {
            wrapper.forEach((wrapp) => {
                VanillaTilt.init(wrapp, {
                    max: 25,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.5,
                });
            });

            return () => {
                Array.from(wrapper).forEach((wrapp) => {
                    if (wrapp.vanillaTilt) {
                        wrapp.vanillaTilt.destroy();
                    }
                });
            };
        }
    }, []);

    



    return (
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
                <div className={`container ${s.skill_container}`}>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4  g-4 align-content-center justify-content-center align-items-center mt-2">
                        {
                            skills && skills.map((s, index) => (
                                <div className="col" key={s.name} data-aos= {index % 2 === 0 ? 'fade-up': 'fade-down'}>
                                    <CardSkill
                                        name={s.name}
                                        image={s.image}
                                        className="wrapper"
                                    />
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
