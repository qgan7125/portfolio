import React from 'react';
import "./navBar.css";

const NavBar = () => {

    const navButtons = [
        {
            name: "Home"
        },
        {
            name: "About"
        },
        {
            name: "Projects"
        },
        {
            name: "Contact"
        }
    ];

    const handleClick = (e) => {
        e.preventDefault();
        const { id } = e.target;
        const section = document.querySelector(`#${id}Section`);
        section?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <nav className="navbar sticky-top">
            <div className="container-fluid justify-content-end">
                <ul className="nav">
                    {
                        navButtons.map((button => (
                            <li
                                key={button.name}
                                className='nav-item'>
                                <a
                                    id={button.name}
                                    href="/#"
                                    className={"nav-link"}
                                    onClick={handleClick}>
                                    {button.name}
                                </a>
                            </li>
                        )))
                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavBar