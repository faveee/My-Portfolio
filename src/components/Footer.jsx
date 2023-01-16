import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
function Footer() {
    return(
        <section>
            <div className="flex flex-row justify-center py-10 pb-2">
            <AiOutlineCopyright className="text-black"/>
            <p className="font-burtons text-black text-center">2023 - Favour Abatan</p>
            </div>
            <div>
            <Link to="/homepage"></Link>
            <Link to="/projects"></Link>
            <Link to="/contactme"></Link>
            </div>
        </section>
    )
}
export default Footer