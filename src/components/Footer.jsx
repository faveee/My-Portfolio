import React from "react";
import "./Footer.css";

function Footer() {
    const aYear = new Date().getFullYear()
    return(
        <footer>
            <div className="flex flex-row justify-center py-10 pb-2">
            <p className="font-burtons text-center ">
                &copy; {aYear} - Favour Abatan
                </p>
            </div>
    
        </footer>
    )
}
export default Footer