import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return(
<main className="text-black">
    <section>
<nav className="Nav-Head pt-5 flex justify-between">
    <h1 className="hero text-2xl font-burtons pl-10">Fave.</h1>
    <ul className="flex justify-between">
        <li>
            <Link to="/" className="pl-5">Home</Link>
        </li>
        <li>
            <Link to="/projects" className="pl-5">Projects</Link>
        </li>
        <li>
            <Link to="/contactme" className="px-5">ContactMe</Link>
        </li>
    </ul>
</nav>
    </section>
</main>
    )
}

export default Navbar