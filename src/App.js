import {Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import CarWashListView from "./pages/ListCarwashPage/CarWashListView";
import RegisterCarWash from "./pages/RegisterPage/RegisterCarWash";
import Login from "./pages/LoginPage/Login";
import About from "./pages/AboutUsPage/About";
import './App.css';
import { useContext } from "react";
import AuthContext from "./context/auth-context";
import RegisterUser from "./pages/RegisterUser/RegisterUser";

function App() {

    const authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);

    return (
        <>
            <NavBar/>
            <div className='page-container'>
                <Routes>
                    {<Route path='/' element = {<Home/>}/>}
                    {<Route path='/home' element = {<Home/>}/>}
                    {<Route path='/list-carwash' element = {<CarWashListView/>}/>}
                    {authCtx.role == "ROLE_CARWASH_OWNER" && <Route path='/register-carwash' element = {<RegisterCarWash/>}/>}
                    {!authCtx.isLoggedIn && <Route path='/login' element = {<Login/>}/>}
                    {<Route path='/about' element = {<About/>}/>}
                    {<Route path='/*' element = {<Home/>}/>}
                    {!authCtx.isLoggedIn && <Route path = '/register' element = {<RegisterUser/>}/>}
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
