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




function App() {
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
            <div className="up sticky-bottom text-end py-3">
                <a href="#navbar">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </a>
            </div>
            <Footer />
        </>
    );
}

export default App;
