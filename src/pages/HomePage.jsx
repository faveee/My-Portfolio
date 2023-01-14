import React from "react";

function HomePage() {
    return(
        <body>
<div className="m-20 p-20 ">
    <h2 className="text-5xl text-left text-teal-800 font-extrabold">Favour Abatan</h2>
    <h3 className="text-3xl font-medium leading-8 py-3">Developer.</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque fugit eveniet, velit quidem cum sequi quos ea aliquid voluptate. Veniam facilis rem atque consectetur voluptates a natus porro nesciunt ipsam!</p>
</div>
<nav className="flex justify-between">
    <ul className="flex justify-between">
        <li>
            <a className="bg-cyan-500 text-white px-4 py-2 pl-5" href="#">
                Download Resume
            </a>
        </li>
        <li>
            <a className="bg-cyan-500 text-white px-4 py-2 pl-5" href="#">
                ContactMe
            </a>
        </li>
    </ul>
</nav>
</body>
    )
}

export default HomePage