import React, { useState } from 'react';
import './Header.css'
import { Link, Route } from 'wouter';

export default function Header(){

    const [navActive, setNavActive] = useState(false);

    const activarNav = () => setNavActive(!navActive)

    return (
       <React.Fragment>
         <header>
            <div className={navActive ? 'containerLogo active'  : 'containerLogo'}> <img src="./assets/img/logo.png" alt="logo" /> </div>
           <div className='containerNav'>
            <div className={navActive ? "sticks active" : "sticks"}  onClick={() => activarNav()}>
                <div className="stick top "></div>
                <div className="stick mid "></div>
                <div className="stick bottom "></div>
            </div>
           </div>
           <svg className={navActive ? "active" : ""} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a479df" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,245.3C384,245,480,203,576,165.3C672,128,768,96,864,101.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>    
        </header>
        <nav className={navActive ? "active" : ""}>
                    <Link to='/'> Home </Link>
                    <Link to='/aboutMe'> About Me </Link>
                    <Link to='/projects'> Projects </Link>
                    <Link to='/social'> Social </Link>
        </nav>
       </React.Fragment>
    );
}