import React from "react";
import peepSide from "../../assets/peepSide.svg";
import envelope from "../../assets/envelope.png";
import phone from "../../assets/phone-call.png";
import "./sidebar.css";

const SideBar = () => {
    return (
        <aside className="siderBar__container" >
            <div className="siderBar__info">
                <ul>
                    <li>
                        <a href="mailto:matthew.gan.antra@gmail.com"><img src={envelope} alt="envelop" /> &nbsp; matthew.gan.antra@gmail.com</a>
                    </li>
                    <li>
                        <img src={phone} alt="phone" />&nbsp; <br /> 520-510-0208
                    </li>
                    <li>
                        <a href="https://github.com/qgan7125" target='_blank' rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" />&nbsp;https://github.com/qgan7125</a>
                    </li>
                </ul>
            </div>
            <img src={peepSide} className="sideImage" alt="sidepeep" />
        </aside>
    )
}

export default SideBar;