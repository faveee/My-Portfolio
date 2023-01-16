import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
function Footer() {
    return(
        <section>
            <div>
            <h6 className="font-burtons text-black py-10 text-center">
            <AiOutlineCopyright  className="m-auto pl-50"/>2023 - Favour Abatan</h6>
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