import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import './index.css'

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            {/* <About /> */}
        </div>
    );
}

export default App;
