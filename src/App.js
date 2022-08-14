import { useEffect } from "react";
import Introduction from "./components/introduction";
import NavBar from "./components/navbar";
import "./App.css";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import MouseParticles from 'react-mouse-particles';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <Introduction />
      <main>
        <NavBar />
        <SideBar />
        <About />
        <Projects />
        <Contact />
      </main>
      <MouseParticles g={1} radius="10" cull="col,image-wrapper" alpha="0.2" life="1.2" color={["#FFBE88", "#E7B7CB", "#F8956F"]} />
      <Footer />
    </>
  );
}

export default App;
