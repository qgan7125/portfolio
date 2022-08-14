import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import optionsJSON from "./options.json";
import "./particles.css";

const ParticlesComponents = ({ options="intro" }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="tsparticles__container"
            options={optionsJSON[options]}
        />
    );
}

export default ParticlesComponents;