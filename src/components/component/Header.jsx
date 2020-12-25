import React from 'react'
import {Link, ChatSVG, Logo, Tel} from '../../import';


function Header() {

    return (
        <>
    <div className="Header">
        <div className="Header__container">
        <div className="Header__logo">
        <Link to="/"><img className="Logo" src={Logo} alt="Logo" /> <span><b>Y</b>uor <b>PRO</b>morion</span></Link>
        </div>
        <div className="Header__li">
        <ul>
            <li><Link to="/">Разработка сайтов</Link></li>
            <li><Link to="/portfolio">Портфолио</Link></li>
        </ul>
        </div>
        <div className="Header__connection">
        <div className="Header__conn">
        <Link to="registration">
        <div className="Header__conn_chat">
        <img src={ChatSVG} alt="ChatSVG"/>
        </div>
        </Link>
        <Link to="/">
        <div className="Header__conn_tel">
        <img src={Tel} alt="Tel" />
        </div>
        </Link>
        </div>
        </div>
        
        </div>
    </div>
</> 
    );
}

export default Header;