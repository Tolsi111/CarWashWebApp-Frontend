import {Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import CarWashListView from "./pages/ListCarwashPage/CarWashListView";
import RegisterCarWash from "./pages/RegisterPage/RegisterCarWash";
import Login from "./pages/LoginPage/Login";
import About from "./pages/AboutUsPage/About";
import './App.css';

function App() {

    return (
        <>
            <NavBar/>
            <div className='page-container'>
                <Routes>
                    <Route path='/' element = {<Home/>}/>
                    <Route path='/home' element = {<Home/>}/>
                    <Route path='/list-carwash' element = {<CarWashListView/>}/>
                    <Route path='/register-carwash' element = {<RegisterCarWash/>}/>
                    <Route path='/login' element = {<Login/>}/>
                    <Route path='/about' element = {<About/>}/>
                    <Route path='/*' element = {<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
