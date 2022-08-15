import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as Pet1 } from "../../assets/pet/pet1.svg";
import { ReactComponent as Pet2 } from "../../assets/pet/pet2.svg";
import { ReactComponent as Pet3 } from "../../assets/pet/pet3.svg";
import { ReactComponent as Pet4 } from "../../assets/pet/pet4.svg";
import { ReactComponent as Pet5 } from "../../assets/pet/pet5.svg";
import { ReactComponent as Pet6 } from "../../assets/pet/pet6.svg";
import { ReactComponent as Pet7 } from "../../assets/pet/pet7.svg";
import { ReactComponent as Pet8 } from "../../assets/pet/pet8.svg";
import { ReactComponent as Pet9 } from "../../assets/pet/pet9.svg";
import "./footer.css";

const pets = [
    <Pet1 className="pets" style={{ top: -143 }} />,
    <Pet2 className="pets" style={{ top: -147 }} />,
    <Pet3 className="pets" style={{ top: -133 }} />,
    <Pet4 className="pets" style={{ top: -132 }} />,
    <Pet5 className="pets" style={{ top: -133 }} />,
    <Pet6 className="pets" style={{ top: -144 }} />,
    <Pet7 className="pets" style={{ top: -137 }} />,
    <Pet8 className="pets" style={{ top: -134 }} />,
    <Pet9 className="pets" style={{ top: -132 }} />,
]

const Footer = () => {
    const footerRef = useRef();
    const [showPets, setShowPets] = useState([]);

    const handlScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        const ob = new IntersectionObserver((e) => {
            if (e[0].isIntersecting) {
                const shuffled = [...pets].sort(() => 0.5 - Math.random());
                const newPets = shuffled.slice(0, 6).map((pet, i) => (
                    {
                        ...pet,
                        props: {
                            ...pet.props,
                            style: {
                                ...pet.props.style,
                                left: 20 + i * 10 + "%",
                                animationDelay: i * 0.5 + "s"
                            },
                            onAnimationEnd: (e) => {
                                e.target.style.left = 20 + i * 10 + "%";
                                e.target.style.transform = "translateY(0)";
                                e.target.style.zIndex = 1;
                            }
                        },
                        key: i
                    }
                ))
                setShowPets(newPets);
            } else {
                setShowPets([])
            }
        }, { threshold: 0.2 });

        if (footerRef.current) {
            ob.observe(footerRef.current);
        }

        return () => {
            ob.disconnect();
        }
    }, [])

    return (
        <footer ref={footerRef}>
            {showPets}
            <button className='btn__scrollTop bg-primary' onClick={handlScrollTop}>&uarr;</button>
            Made By <small>&hearts;</small> Matthew Gan
        </footer>
    )
}

export default Footer;