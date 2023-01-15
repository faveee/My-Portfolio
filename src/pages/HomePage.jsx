import React from "react";
import "./Homepage.css";
import Image from "../../src/assets/hero.jpg"; 

function HomePage() {
    return(
        <body>
<div className="m-11 p-20 flex justify-between">
    <h2 className="md:flex-row text-5xl text-left text-teal-800 font-extrabold m-0">Favour Abatan</h2>
    </div>
    <div className="hero">
        <ul className="dynamic-texts">
        <li><span>Developer.</span></li>
        <li><span>Freelancer.</span></li>
        </ul>
</div>
<div className="flex flex-col md:flex-row justify-between gap-4">
<p className="pl-5 text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit laborum cumque qui. Ex, ut voluptatem? Magni aspernatur beatae accusantium dolorum quidem qui eveniet inventore illum dignissimos. Voluptate non voluptatem culpa nesciunt, labore eligendi, consequatur dolor totam, officia maiores laborum deserunt. Voluptas culpa fugiat placeat sunt maiores? Nemo, aperiam ducimus.</p>
<img className="rounded-full flex ml-auto" src={Image} alt="Hero"/>
</div>
<nav className="">
    <ul>
        <li>
            <a  className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 mb-5 ml-5 px-8 text-center border-double hover:border-double border-4 rounded-lg" href="https://drive.google.com/file/d/1YhOE-bDOXwyOriDFzqmabV7hjrmHv_Iz/view">
                Download Resume
            </a>
        </li>
    </ul>
</nav>
</body>
    )
}

export default HomePage