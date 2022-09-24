import React from 'react';
import AutoTexEffect from '../autoTextEffect';
import ParticlesComponents from '../particles';
import ArrowRight from "bootstrap-icons/icons/arrow-right.svg";
import "./introduction.css";

const Introduction = () => {

    const roles = ["a React front-end developer.", "a Software engineer."];

    const handleView = () => {
        const about = document.querySelector("#AboutSection");
        about.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section id="HomeSection" className='introduction__container'>
            <ParticlesComponents />
            <div className='home__contents'>
                <div className='introduction__title'>
                    Hello, I'm <span className="text-primary">Quan Gan</span> <br />
                    I'm <AutoTexEffect text={roles} />
                </div>
                <button onClick={handleView}>View My Work <img className='arrowright' src={ArrowRight} alt="arrow right" /> </button>
            </div>
        </section>
    )
}

export default Introduction;