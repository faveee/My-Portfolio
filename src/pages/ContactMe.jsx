import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

function ContactMe() {
    return(
        <section>
<div>
    <h3>Get in touch</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam inventore dignissimos voluptates voluptatibus corporis, rem, perspiciatis officia quasi unde itaque enim alias quibusdam nihil laboriosam voluptate maxime amet minima.</p>
    <p>+2349030559945</p>
    <p>Lagos, Nigeria</p>
</div>
<div>
    <h2>Mail</h2>
    </div>
    <div className="text-5xl flex justify-center gap-16">
<AiOutlineTwitter />
<AiFillGithub />
<AiFillLinkedin />
</div>
</section>
    )
}

export default ContactMe