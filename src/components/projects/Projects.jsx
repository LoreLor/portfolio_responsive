import React, { useEffect, useState } from "react";
//import { useDispatch } from "react-redux";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import CardProject from "./card_project/CardProject";
//import { allProjects } from "../../redux/actions/project";
import s from './Projects.module.css';
import mockImage from '../../assets/images/ecommerce_pf.png'




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
            <div className={`container ${s.projects_page}`} id="projects">
                <div className={s.projects_text}>
                    <h2>
                        <AnimatedLetters
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
                        />
                    </h2>
                    
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-align-content-center justify-content-center align-items-center mt-2">
                        <div className="col">
                            <CardProject
                                name='Lorena' 
                                image={mockImage}
                                description='lorenanansnndasdbdsjdgsjgjsghjsfgajsgfas' 
                                stack='ashkashkash sasdhsadhsa jsdks' 
                                deploy='dsdsdsd'
                                demo='fsdf'
                                github='sdfsdf'
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
                                image={mockImage}
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
