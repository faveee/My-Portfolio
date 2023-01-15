import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

function ContactMe() {
    return(
        <section className="m-10 bg-[#fff7ed]">
<div className="p-10">
    <h3 className="text-8xl font-extrabold text-red-500 pb-10 text-center">Get in touch</h3>
    <p className="">Have a frontend developer role you're looking to fill or a project with a need for my range of skill sets? I'm currently available to new opportunities. Kindly reach out!</p>
</div>
<div className="">
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 mb-5 ml-20 px-10 text-center border-double hover:border-double border-4 rounded-lg"><a href="mailto:abatangift11@gmail.com">Let's talk</a></button>
 </div>
    <div className="text-5xl flex justify-center gap-16 text-gray-60 pt-10">
<AiOutlineTwitter />
<AiFillGithub />
<AiFillLinkedin />
</div>
</section>
    )
}

export default ContactMe

