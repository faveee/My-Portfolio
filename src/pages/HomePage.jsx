import React from "react";
import "./Homepage.css";
import hero from "../../src/assets/hero.png"; 

function HomePage() {

    return(
        <body>
<div className="m-11 p-20">
    <h2 className="text-5xl text-left text-teal-800 font-extrabold m-0">Favour Abatan</h2>
    </div>
    <div className="hero">
        <ul className="dynamic-texts">
        <li><span>Developer.</span></li>
        <li><span>Freelancer.</span></li>
        </ul>
        <img src={hero} alt="Hero"/>
</div>
<p className="pl-5 text-black py-5">I'm a software Developer, able to build a web presence from scratch.</p>
<nav className="pt-5">
    <ul>
        <li>
            <a  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 ml-10 my-5 border-double hover:border-double rounded-lg" href="https://drive.google.com/file/d/1YhOE-bDOXwyOriDFzqmabV7hjrmHv_Iz/view">
                Download Resume
            </a>
        </li>
    </ul>
</nav>
</body>
    )
}

export default HomePage