import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import './index.css'
import Skills from "./components/skills/Skills";
import Loader from "react-loaders";

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
        </>
    );
}

export default App;
