import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { ToastContainer } from "react-toastify";



function App() {
    return (
        <>
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
  
            <div className="up sticky-bottom text-end py-3">
                <a href="#navbar">
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </a>
            </div>
            <div className="separator"></div>
            <Footer />
        </>
    );
}

export default App;
