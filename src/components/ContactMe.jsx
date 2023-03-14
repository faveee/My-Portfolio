
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin} from "react-icons/ai";

function ContactMe() {
    return(
        <section className="m-5" id="contact">
<div className="p-10">
    <h3 className="text-8xl font-extrabold text-red-500 pb-10 text-center">Get in touch</h3>
    <p className="MainTxt">Have a frontend developer role you're looking to fill or a project with a need for my range of skill sets? I'm currently available to new opportunities. Kindly reach out!</p>
</div>
<div className="flex justify-center">
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500
 text-white py-3 mb-5 px-10 text-center border-double hover:border-double border-4 rounded-lg"><a href="mailto:abatangift11@gmail.com">Let's talk</a></button>
 </div>
    <div className="AweSome text-5xl flex justify-center gap-16 py-10">
        <a href="https://twitter.com/thefave__" >
<AiOutlineTwitter />
</a>
<a href="https://github.com/faveee" >
<AiFillGithub />
</a>
<a href="https://linkedin.com/in/abatanfavor" >
<AiFillLinkedin />
</a>
</div>
</section>
    )
}

export default ContactMe

