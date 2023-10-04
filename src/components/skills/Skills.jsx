import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import TagCloud from "TagCloud";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import "./Skills.css";

const textContent = ".tags";
const texts = [
  '3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  'Mouse', 'Rolling', 'Sphere','3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  '6KB', 'v2.x','react', 'redux', 'angular', 'springBoot'
];

const Skills = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const [tagCloudOptions, setTagCloudOptions] = useState({
        radius: window.innerWidth >= 768 ? 200 : 135, // Cambia el radio según el ancho de la pantalla
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
        keep: true,
    });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    useEffect(() => {
        const newArray = texts.map((s) => s);
        TagCloud(textContent, newArray, tagCloudOptions);
    }, [texts, tagCloudOptions]);

    useEffect(() => {
        // Escucha el evento de cambio de tamaño de ventana
        const handleResize = () => {
            setTagCloudOptions({
                ...tagCloudOptions,
                radius: window.innerWidth >= 768 ? 200 : 135,
            });
        };
        window.addEventListener("resize", handleResize);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [tagCloudOptions]);

    return (
        <section id="skills">
            <div className="container skills-page">
                <div className="skill-text">
                    <h2>
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
                    </h2>
                </div>
                <div className="tags-content">
                    <span className="tags" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
