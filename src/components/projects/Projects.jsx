import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
//import { allProjects } from "../../redux/actions/project";

import "./Projects.css";



const Projects = () => {
    const dispatch = useDispatch();
    const [letterClass, setLetterClass] = useState("text-animate");

    //useEffect(() => {
        //dispatch(allProjects());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    //}, []);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3500);
    }, []);

    return (
        <>
            <div className="projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                "M",
                                "y",
                                " ",
                                "P",
                                "r",
                                "o",
                                "j",
                                "e",
                                "c",
                                "t",
                                "s",
                            ]}
                            idx={15}
                        />
                        <div className="carousel-zone">
                            <Carousel />
                        </div>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Projects;
