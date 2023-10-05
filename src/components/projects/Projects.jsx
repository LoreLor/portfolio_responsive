import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import CardProject from "./card_project/CardProject";
//import { allProjects } from "../../redux/actions/project";
import s from './Projects.module.css';




const Projects = () => {
    //const dispatch = useDispatch();
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
            <div className={s.projects_page} id="projects">
                <div className={s.projects_text}>
                    <h2>
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
                    </h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mx-3 mt-3">
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image="../src/assets/images/ecommerce_pf.png"
                                description='lorenanansnndasdbdsjdgsjgjsghjsfgajsgfas' 
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo=''
                                github=''
                            />
                        </div>
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image="../src/assets/images/ecommerce_pf.png"
                                description='lorenanansnndasdbdsjdgsjgjsghjsfgajsgfas' 
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo=''
                                github=''
                            />
                        </div>
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image="../src/assets/images/ecommerce_pf.png"
                                description='lorenanansnndasdbdsjdgsjgjsghjsfgajsgfas' 
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo=''
                                github=''
                            />
                        </div>
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image="../src/assets/images/ecommerce_pf.png"
                                description='lorenanansnndasdbdsjdgsjgjsghjsfgajsgfas' 
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo=''
                                github=''
                            />
                        </div>
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image="../src/assets/images/ecommerce_pf.png"
                                description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nesciunt ea animi sed voluptate aperiam eum'
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo=''
                                github=''
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
