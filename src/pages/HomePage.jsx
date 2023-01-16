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
        <p className="text-red-500 pl-5 pb-10 text-4xl">
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
<p className="pl-5 pt-20 text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fugit laborum cumque qui. Ex, ut voluptatem? Magni aspernatur beatae accusantium dolorum quidem qui eveniet inventore illum dignissimos. Voluptate non voluptatem culpa nesciunt, labore eligendi, consequatur dolor totam, officia maiores laborum deserunt. Voluptas culpa fugiat placeat sunt maiores? Nemo, aperiam ducimus.</p>
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
</section>
    )
}

export default HomePage