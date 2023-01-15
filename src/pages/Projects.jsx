import React from "react";
import signup from "../../src/assets/signup.png"; 
import todo from "../../src/assets/todo.png"; 
import sparzly from "../../src/assets/sparzly.png";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi"

function Projects() {
    return(
        <section className="text-black">
<div className="about_section m-20">
    <h2 className="text-5xl font-extrabold text-red-500 pb-10 text-center">Somethings i've built</h2>
    </div>
    <div className="flex flex-col gap-3">
    <div className="text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={signup} alt="Signup"/>
        <h3 className="text-lg font-medium pt-8 pb-2">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Sign-Up-Form.git" >
<AiFillGithub />
</a>
<a href="https://faveee-signupform.netlify.app" >
<FiExternalLink />
</a>
</div>
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={todo} alt="Todo-List" />
        <h3 className="text-lg font-medium pt-8 pb-2">Todo List</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Todo-App.git" >
<AiFillGithub />
</a>
<a href="https://favee-todoapp.netlify.app" >
<FiExternalLink />
</a>
</div>
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={sparzly} alt="Sparzly"/>
        <h3 className="text-lg font-medium pt-8 pb-2">Sparzly Food App</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee/Sparzly-Food.git" >
<AiFillGithub />
</a>
<a href="#" >
<FiExternalLink />
</a>
</div>
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={signup} alt="Signup"/>
        <h3 className="text-lg font-medium pt-8 pb-2">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
        <div className="flex gap-3 pt-5 text-2xl">
        <a href="https://github.com/faveee" >
<AiFillGithub />
</a>
<a href="#" >
<FiExternalLink />
</a>
</div>
</div>
</div>
</section>
    )
}

export default Projects