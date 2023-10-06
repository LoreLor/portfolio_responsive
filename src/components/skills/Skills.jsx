import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import TagCloud from "TagCloud";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
//import { useDispatch, useSelector } from "react-redux";
//import { getSkills } from "../../redux/actions/skill";
import './Skills.css'
import s from "./Skills.module.css";



const textContent = ".tags";
const texts = [
  '3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  'Mouse', 'Rolling', 'Sphere','3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  '6KB', 'v2.x','react', 'redux', 'angular', 'springBoot'
];
// const options = {
//     radius: 130,
//     // animation speed
//     // slow, normal, fast
//     maxSpeed: "normal",
//     initSpeed: "slow",
//     // 0 = top
//     // 90 = left
//     // 135 = right-bottom
//     direction: 90,
//     // interact with cursor move on mouse out
//     keep: true,
// };

const Skills = () => {
    //const dispatch = useDispatch();
    const [letterClass, setLetterClass] = useState("text-animate");
    const [tagCloudOptions, setTagCloudOptions] = useState({
        radius: window.innerWidth >= 768 ? 200 : 135, // Cambia el radio según el ancho de la pantalla
        maxSpeed: "normal",
        initSpeed: "slow",
        direction: 135,
        keep: true,
    });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    useEffect(() => {
        //dispatch(getSkills());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //const skills = useSelector((state) => state.skill.allSkills);


    useEffect(() => {
        function handleResize() {
            // responsive del tag
            const newRadius = window.innerWidth >= 1024 ? 260 : 150;
            setTagCloudOptions({
                ...tagCloudOptions,
                radius: newRadius,
            });
        }
        // escucha cambio de tamaño
        window.addEventListener("resize", handleResize);

        return () => {
            //limpia el escuchador
            window.removeEventListener("resize", handleResize);
        };
    }, [tagCloudOptions]);

    useEffect(() => {
        const newArray = texts.map((s) => s);
        const tagcloudInstance = new TagCloud(textContent, newArray, tagCloudOptions);
    
        return () => {
            // elimina el tag cuando se desmonta
            tagcloudInstance.destroy();
        };
    }, [texts, tagCloudOptions]);



    return (
        <section id="skills">
            <div className={`container ${s.skills_page}`}>
                <div className={s.skill_text}>
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
                <div className={s.tags_content}>
                    <span className={`${s.tags} tags`} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
