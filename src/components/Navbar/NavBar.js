import React, {useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthContext from '../../context/auth-context';
import {Button} from "react-bootstrap"
import './Navbar.css';

function NavBar() {
  const authCtx = useContext(AuthContext);

  // const handleLogout = () => {
  //   navigate('/about')
  // }

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

  function logout(event) {
    event.preventDefault();
    console.log("logging out...");
    authCtx.onLogout();
    navigate('/home');
  }
  function login(event) {
    event.preventDefault();
    console.log("logging in...");
    navigate('/login');
  }

  window.addEventListener('resize', showButton);

  return (
   <>
   <nav className='navbar-home'>
    <div className='navbar-container'>
        <Link to="/home" className="navbar-logo" id={"flex"}>
          <h2 className="first-word">
            Top
          </h2>
          <h2 className="second-word">
           Wash 
          </h2>
        </Link>
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
        </div> */}
        <ul className={click ? 'nav-menu active': 'nav-menu'}>
          <li className='nav-item'>
            <Link to ={'/home'} className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ={'/list-carwash'} className='nav-links' onClick={closeMobileMenu}>
              CarWash List
            </Link>
          </li>
          {authCtx.role == "ROLE_CARWASH_OWNER" && <li className='nav-item'>
            <Link to ={'/register-carwash'} className='nav-links' onClick={closeMobileMenu}>
              Register CarWash
            </Link>
          </li>}
          {authCtx.role == "ROLE_USER" && <li className='nav-item'>
            <Link to ={'/appointments'} className='nav-links' onClick={closeMobileMenu}>
              Your appointments
            </Link>
          </li>}
          <li className='nav-item'>
            <Link to ={'/about'} className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          </ul>
          {!authCtx.isLoggedIn && <form onSubmit={login}><Button type={"submit"}>Login</Button></form>}
          {authCtx.isLoggedIn && <form onSubmit={logout}><Button type={"submit"}>Logout</Button></form>}
          {/* {!authCtx.isLoggedIn && <Button onClick={console.log("LOGIN!")} buttonStyle='btn--outline'>Login</Button>}
          {!authCtx.isLoggedIn && <Button onClick={console.log("LOGOUT!")} buttonStyle='btn--outline'>Logout</Button>} */}
    </div>
   </nav>
   </>
  );
}

export default NavBar