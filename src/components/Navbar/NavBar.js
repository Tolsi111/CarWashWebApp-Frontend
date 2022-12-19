import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from '../Button/Button'
import './Navbar.css';
import {NavLink} from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();

  const navigateLogin = () =>{
        navigate('/home')
    }

  const [click,setClick] = useState(false);

  const [button,setButton] = useState(true);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <=960){
      setButton(false)
    }else{
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
   <>
   <nav className='navbar-home'>
    <div className='navbar-container'>
        <NavLink to="/home" className="navbar-logo" id={"flex"}>
          <h2 className="first-word">
            Top
          </h2>
          <h2 className="second-word">
           Wash 
          </h2>
        </NavLink>
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div> */}
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <NavLink to ={'/home'} className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to ={'/list-carwash'} className='nav-links' onClick={closeMobileMenu}>
              List CarWash
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to ={'/register-carwash'} className='nav-links' onClick={closeMobileMenu}>
              Register CarWash
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to ={'/about'} className='nav-links' onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>
          </ul>
          {button && <Button onClick={navigateLogin} buttonStyle='btn--outline'>Login</Button>}
    </div>
   </nav>
   </>
  );
}

export default NavBar