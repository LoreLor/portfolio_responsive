import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import './index.css'

function App() {
    return (
        <>
            <Navbar />
            <div className="separator"></div>
            <Home />
            <div className="separator"></div>
            <About />
        </>
    );
}

export default App;
