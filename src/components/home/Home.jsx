import React, { useEffect, useState } from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import Logo from "../home/logo/Logo";
import s from "./Home.module.css";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = [" ", "L", "O", "R", "E", "N", "A"];
    const jobArray = ["F", "U", "L", "L", " ", "S", "T", "A", "C", "K"];
    const jobArray2 = ["D", "E", "V", "E", "L", "O", "P", "E", "R", "."];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate");
        }, 6000);
    }, []);

    return (
        <section className={`container ${s.home_page}`} id="home">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                <div className="col">
                    <h1 className={s.card_title} data-aos="fade-right">
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I'</span>
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
                    <a href="#contact" className={s.flat_button} data-aos="fade-up">
                        CONTACT ME
                    </a>
                </div>
            </div>
            <div className="col">
                <Logo />
            </div>
        </section>
    );
};

export default Home;
