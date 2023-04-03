import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import './styles/app.scss'
import './styles/mediaquery.scss'
import { useState, useEffect } from "react";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);
 
  
 
  return (

    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
    <Home />
    <Projects />
    <About/>
    <Contact/>
    <Footer />
    <Toaster />
    </>
    )
    
}

export default App;
