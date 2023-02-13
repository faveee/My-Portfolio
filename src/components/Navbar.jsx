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
    <section className="text-black pt-10">

    <div className="menuicon flex justify-end">
        <MenuIcon onClick={handleToggle} />
      </div>
      
<nav className={active ? 'navbar active' : 'navbar'}Nav-Head pt-5 flex justify-between>
    
    <ul className="flex justify-end font-burtons">
        

<div className="closed">
<CloseIcon onClick={handleToggle} className='close' />
</div>
        <li onClick={handleToggle}>
            <Link to="/" className="pl-5">Home</Link>
        </li>
        <li onClick={handleToggle}>
            <Link to="/" className="pl-5">Projects</Link>
        </li>
        <li onClick={handleToggle}>
            <Link to="/" className="px-5">ContactMe</Link>
        </li>
    </ul>

</nav>
<Modal open={openModal}  onClose={() => setOpenModal(false)} />
    </section>
    )
}

export default Navbar