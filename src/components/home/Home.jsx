import React, { useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import Logo from "../home/logo/Logo";
import logoTitle from "../../assets/images/logo-L2-rem.png";
import "./Home.css";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = [" ","L","O", "R", "E", "N", "A"];
    const jobArray = ["F", "U", "L", "L", " ", "S", "T", "A", "C", "K"];
    const jobArray2 = ["D", "E", "V", "E", "L", "O", "P", "E", "R", "."];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 6000);
    }, []);

    return (
        <section id="home" className="container home-page">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                    <div className="col ps-4">
                        <div className="card-body">
                            <h1 className="card-title">
                                <span className={letterClass}>H</span>
                                <span className={`${letterClass} _12`}>i,</span>
                                <br />
                                <span className={`${letterClass} _13`}>I</span>
                                <span className={`${letterClass} _14`}>m</span>
                                {/* <img 
                                    src={logoTitle} 
                                    alt="Logo de L" 
                                /> */}
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={nameArray}
                                    idx={15}
                                />
                                <br />

                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={jobArray}
                                    idx={12}
                                />
                                <br />
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={jobArray2}
                                    idx={13}
                                />
                            </h1>
                            <a href="#contact" className="flat-button">
                                CONTACT ME
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <Logo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
