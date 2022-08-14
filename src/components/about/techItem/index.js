import React, { useEffect, useState, useRef } from 'react';
import "./techItem.css";

const TechItem = ({ src, name }) => {
    const [show, setShow] = useState(false);
    const refItem = useRef();

    useEffect(() => {
        const ob = new IntersectionObserver((e) => {
            if(e[0].isIntersecting) {
                setShow(true);
            }else {
                setShow(false);
            }
        }, {
            rootMargin: "100px",
            threshold: 0.1
        })

        ob.observe(refItem.current);

        return () => {
            ob.disconnect();
        }
    }, [])

    return (
        <div className={'techItem__container' + (show ? " techItem__animation" : "")} ref={refItem}>
            <img src={src} alt={name} />
            {name}
        </div>
    )
}

export default TechItem;