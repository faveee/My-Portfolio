import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { ImLocation } from "react-icons/im";

function ContactMe() {
    return(
        <section className="m-10">
<div className="p-10">
    <h3 className="text-8xl font-extrabold text-red-500 pb-10 text-center">Get in touch</h3>
    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam inventore dignissimos voluptates voluptatibus corporis, rem, perspiciatis officia quasi unde itaque enim alias quibusdam nihil laboriosam voluptate maxime amet minima.</p>
</div>
<div>
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 mb-5 text-center border-double hover:border-double border-4 rounded-lg">Let's talk</button>
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