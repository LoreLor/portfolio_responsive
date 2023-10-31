import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProject from "./card_project/CardProject";
import { allProjects } from "../../store/actions/projects";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import s from './Projects.module.css';
import { Fragment } from "react";





const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projects)
   
    const [letterClass, setLetterClass] = useState("text-animate");
    const [animateTitle, setAnimateTitle] = useState(false);

    useEffect(() => {
        dispatch(allProjects());
    }, []);

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


    return (
        <>
            <div className={`container ${s.projects_page}`} id="projects">
                {/* Animacion del Titulo */}
                <div className={s.projects_text}>
                    <h2>
                    {
                        animateTitle ? 
                        (<AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                "M",
                                "Y",
                                " ",
                                "P",
                                "R",
                                "O",
                                "J",
                                "E",
                                "C",
                                "T",
                                "S",
                            ]}
                            idx={15}
                        />) : (null)
                    }
                    </h2>
                    {/* Cards de Proyectos */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-align-content-center justify-content-center align-items-center mt-2">
                        { projects && projects.map((p, index) => {
                            return (
                                <div className="col" key={p.name} data-aos={index % 2 === 0 ? 'fade-up' : 'fade-down'}>
                                    <CardProject
                                        name={p.name} 
                                        image={p.image}
                                        description={p.description} 
                                        stack={p.stack}
                                        deploy={p.deploy}
                                        demo={p.demo}
                                        github={p.github}
                                    />
                                </div>
                            )
                        }) 
                        }
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Projects;
