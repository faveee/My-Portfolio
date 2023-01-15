import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <section>
            <div>
            <h6 className="font-burtons text-black py-10 text-center">Designed and Developed by Fave</h6>
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