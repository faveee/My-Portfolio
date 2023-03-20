import "./Navbar.css";
import React from "react";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [active, setActive] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const handleToggle = () => {

        setActive(!active);
    }

    return(
    <section className="pt-15">
    
    <div className="menuicon flex justify-end">
        <MenuIcon onClick={handleToggle} />
      </div>
      <nav>
      <h1 className="logoicon text-2xl font-burtons pl-5 pt-10">Fave.</h1>
<div className={active ? 'navbar active' : 'navbar'}>
    
    <ul className="flex justify-end font-burtons">
        
<div className="closed">
<CloseIcon onClick={handleToggle} className='close' />
</div>
        <li onClick={handleToggle}>
            <Link to="/" className="pl-5">Home</Link>
        </li>
        <li onClick={handleToggle}>
            <a href="#projects" alt="projects" className="pl-5">Projects</a>
        </li>
        <li onClick={handleToggle}>
        <a href="#contact" alt="Contact" className="px-5">Contact</a>
        </li>
    </ul>
</div>
</nav>
<Modal open={openModal}  onClose={() => setOpenModal(false)} />
    </section>
    )
}

export default Navbar