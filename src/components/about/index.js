import React from 'react';
import tech from "./tech.json";
import TechItem from './techItem';
import avatar from "../../assets/avatar.JPG";
import "./about.css";

const About = () => {

    return (
        <section id="AboutSection" className='about__container'>
            <h1>About Me</h1>
            <figure>
                <img className='avatar' src={avatar} alt="Matthew Gan" />
            </figure>
            <p>
                I'm a React Front-End Developer for Antra. And I have experience in designing User Interface (UI) web applications
                using HTML5, CSS3, JavaScript, TypeScript, Sass, jQuery, NodeJS, ReactJS, JSON, bootstrap, MaterialUI, MVC, Webpack, babel, and using version control like GIT.
            </p>
            <div>
                <h2>Technologies and Tools</h2>
                <div className='tech__container'>
                    {
                        tech['tech'].map(t => (
                            <TechItem key={t.name} {...t} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default About;