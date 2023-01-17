import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    const aYear = new Date().getFullYear()
    return(
        <footer>
            <div className="flex flex-row justify-center py-10 pb-2">
            <p className="font-burtons text-black text-center">
                &copy; {aYear} - Favour Abatan
                </p>
            </div>
            <div>
            <Link to="/homepage"></Link>
            <Link to="/projects"></Link>
            <Link to="/contactme"></Link>
            </div>
        </footer>
    )
}
export default Footer