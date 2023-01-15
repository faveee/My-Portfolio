import React from "react";
import signup from "../../src/assets/signup.png"; 
import todo from "../../src/assets/todo.png"; 
import faq from "../../src/assets/faq.png"; 

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
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-[60px] mx-11">
        <img src={todo} alt="Todo-List" />
        <h3 className="text-lg font-medium pt-8 pb-2">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css, Javascript </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-10 mx-10">
        <img src={faq} alt="Signup"/>
        <h3 className="text-lg font-medium pt-8 pb-2 mx-10">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
</div>
<div className="text-left shadow-lg p-11 rounded-xl my-10 mx-10">
        <img src={signup} alt="Signup"/>
        <h3 className="text-lg font-medium pt-8 pb-2">SignUp Page</h3>
        <p className="font-extralight pb-2">HTML, Css </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere vero rem mollitia ipsa earum iusto iure possimus minima debitis explicabo aliquam aperiam sed, enim optio. Quam provident quod tempora odio.</p>
</div>
</div>
</section>
    )
}

export default Projects