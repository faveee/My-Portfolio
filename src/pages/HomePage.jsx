import React from "react";
import Typical from "react-typical";
import Image from "../../src/assets/hero.jpg"; 

function HomePage() {
    return(
        <section>
<div className="mt-11 pt-20 pb-10 pl-5 flex justify-between">
    <h2 className="md:flex-row text-5xl text-left text-teal-800 font-extrabold m-0">Hi there! I'm Favour Abatan</h2>
    </div>
    <div>
        <p className="text-red-500 pl-5 pb-2 text-4xl">
        <Typical
        loop={Infinity}
        wrapper="b"
        steps={[
        'Programmer.',
        1000,
        'Developer.',
        1000,
        'Techie.',
        1000
    ]}
      />
</p>
</div>
<div className="flex flex-col md:flex-row justify-between gap-4">
<p className="px-5 pt-10 text-black">I'm a software developer able to build a web presence from scratch. I have demostrated a particular aptitude for meticulously paying attention to details. I'm passionate about doing an outstanding job and have received multiple compliments from my past managers for collaborative, quick critical thinking, and logical technical skills to improve work efficiency.</p>
<img className="rounded-full flex ml-auto" src={Image} alt="Hero"/>
</div>
<nav className="mt-10">
    <ul>
        <li>
            <a  className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 m-5 px-8 text-center border-double hover:border-double border-4 rounded-lg" href="https://drive.google.com/file/d/1YhOE-bDOXwyOriDFzqmabV7hjrmHv_Iz/view">
                Download Resume
            </a>
        </li>
    </ul>
</nav>
</section>
    )
}

export default HomePage