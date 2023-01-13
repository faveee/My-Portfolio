import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
    return(
<main>
    <section>
<nav className="pt-5 flex justify-between">
    <h1 className="text-xl font-burtons pl-10">Fave.</h1>
    <ul className="flex justify-between">
        <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
        </li>
        <li>
            <Link to="/homepage" className="pl-5">Home</Link>
        </li>
        <li>
            <Link to="/about" className="pl-5">About</Link>
        </li>
        <li>
            <Link to="/contact" className="px-5">Contact</Link>
        </li>
    </ul>
</nav>
    </section>
</main>
    )
}

export default Navbar