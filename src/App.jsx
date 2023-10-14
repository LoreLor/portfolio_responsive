import { useEffect } from "react";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { allProjects }  from "./store/actions/projects";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
    },[]);

    useEffect(() => {
        dispatch(allProjects())
    }, []);

    return (
        <>
            <Navbar />
            <ToastContainer />
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
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </a>
            </div>
            <Footer />
        </>
    );
}

export default App;
