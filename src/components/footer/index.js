import React from 'react';
import "./footer.css";

const Footer = () => {

    const handlScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer>
            <button className='btn__scrollTop bg-primary' onClick={handlScrollTop}>&uarr;</button>
            Made By <small>&hearts;</small> Matthew Gan
        </footer>
    )
}

export default Footer;