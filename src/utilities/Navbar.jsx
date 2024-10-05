import React from 'react';
import { Container, Button ,Col} from 'react-bootstrap';
import { RiMenu4Line } from "react-icons/ri";
import Logo from "../assets/Logo.png"
const Navbar = () => {
    return (
        <header>
            <Container fluid className=" d-flex justify-content-between align-items-center">
                <div>
                <Button className='login-btn '>تسجيل الدخول</Button>
                <Button className='local ' style={{color:"white"}}> English</Button>
                </div>
                <div className='me-5'>
                <img className="navbar-logo" src={Logo} alt="Fomex Logo" />
                </div>
                <div className="menu-icon"   >
                <RiMenu4Line  size={24} />
                </div>


            </Container>
        </header>
    );
};

export default Navbar;
