import "./Projects.css";
import signup from "../../src/assets/signup.png"; 
import todo from "../../src/assets/todo.png"; 
import sparzly from "../../src/assets/sparzly.png";
import portfolio from "../../src/assets/portfolio.png";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"

function Projects() {
    return(
        <section className="text-black">
<div className="about_section mb-5 mt-20">
    <h2 className="text-5xl font-extrabold text-red-500 pb-10 text-center">Featured Projects</h2>
    </div>
    <div className="flex flex-col gap-3">
    <div className="ProAbt text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={signup} alt="Signup"/>
        <h3 className="text-lg font-medium pt-8 pb-2">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css </p>
        <p>A static sign up page website designed to showcase simple content structure and clean design pattern.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Sign-Up-Form.git" >
<AiFillGithub />
</a>
<a href="https://faveee-signupform.netlify.app" >
<FiExternalLink />
</a>
</div>
</div>
<div className="ProAbt text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={todo} alt="Todo-List" />
        <h3 className="text-lg font-medium pt-8 pb-2">Todo List</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript </p>
        <p>A single-page responsive website for a mock-todo list. This website has the ability to save, edit and delete a todo list.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Todo-App.git" >
<AiFillGithub />
</a>
<a href="https://favee-todoapp.netlify.app" >
<FiExternalLink />
</a>
</div>
</div>
<div className="ProAbt text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={sparzly} alt="Sparzly"/>
        <h3 className="text-lg font-medium pt-8 pb-2">Sparzly Food App</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript </p>
        <p>A responsive E-commerce food app that allows customer add to cart and process their order. It has a scroll components that displays featured products of the app.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Sparzly-Food.git" >
<AiFillGithub />
</a>
<a href="https://www.google.com" >
<FiExternalLink />
</a>
</div>
</div>
<div className="ProAbt text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={portfolio} alt="Portfolio"/>
        <h3 className="text-lg font-medium pt-8 pb-2">My Portfolio</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript, React, Tailwind </p>
        <p>A personal professional portfoilio designed to showcase featured projects. It has the ability to toggle between light and dark mode.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/my-portfolio.git" >
<AiFillGithub />
</a>
<a href="https://portfolio-favee.vercel.app" >
<FiExternalLink />
</a>
</div>
</div>
</div>
</section>
    )
}

export default Projects