import Typical from "react-typical";
import Image from "../../src/assets/hero.jpeg"; 
import "./HeroSection.css";


function HomePage() {
    return(
        <section>
<div className="mt-10 pt-10 pb-10 pl-5 flex justify-between">
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
<p className="Namex px-5 pt-10">A well rounded Front-end Developer equipped with a diverse and promising skill set able to build a web presence from scratch. Knowledgeable in user interface, testing, and debugging processes. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Demonstrated a particular aptitude for meticulously paying attention to details.
</p>
<img className="rounded-full flex m-auto" src={Image} style={{width: 400, height: 400}} alt="Hero"/>
</div>
<div className="cvbtn mt-10 ">
    
            <a  className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 ml-3 px-8 text-center border-double hover:border-double border-4 rounded-lg" href="https://drive.google.com/file/d/1m0qOIh74QMDRz-Ndvc5M0B_4xrZy9zyS/view">
                Download Resume
            </a>
</div>
</section>
    )
}

export default HomePage