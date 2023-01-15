import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return(
        <section>
            <div>
            <h6 className="font-thin flex justify-items-end">Designed and Developed by Fave</h6>
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