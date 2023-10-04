import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import TagCloud from "TagCloud";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
//import { useDispatch, useSelector } from "react-redux";
//import { getSkills } from "../../redux/actions/skill";
import "./Skills.css";

const textContent = ".tags";
const texts = [
  '3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  'Mouse', 'Rolling', 'Sphere','3D', 'TagCloud', 'JavaScript',
  'CSS3', 'Animation', 'Interactive',
  '6KB', 'v2.x','react', 'redux', 'angular', 'springBoot'
];
const options = {
    radius: 135,
    // animation speed
    // slow, normal, fast
    maxSpeed: "normal",
    initSpeed: "normal",
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
};

const Skills = () => {
    //const dispatch = useDispatch();
    const [letterClass, setLetterClass] = useState("text-animate");

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
        const newArray = texts.map((s) => s);
        TagCloud(textContent, newArray, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [texts]);

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
