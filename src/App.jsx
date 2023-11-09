import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { allProjects } from "./store/actions/projects";
import { allSkills } from "./store/actions/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { Route, Routes } from "react-router";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allProjects());
        dispatch(allSkills());
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    },[]);

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route path="/login/dashboard" element={<Dashboard />} />

                {/* <Route path="/login/dashboard" element={<Dashboard />} /> */}
                <Route
                    path="/"
                    element={
                        <>
                            {/* El contenido principal de tu aplicación */}
                            <Navbar />
                            <div className="separator"></div>
                            <Home />
                            <div className="separator"></div>
                            <About />
                            <div className="separator"></div>
                            <Skills />
                            <div className="separator"></div>
                            <Projects />
                            <div className="separator"></div>
                            <Contact />
                            <div className="separator"></div>
                            <div className="up sticky-bottom text-end py-3 pe-2">
                                <a href="#">
                                    <FontAwesomeIcon
                                        icon={faArrowAltCircleUp}
                                    />
                                </a>
                            </div>
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
