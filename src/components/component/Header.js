import React from 'react'
import Logo from '../../components/svg/LOGOYPRO.svg'
import Chat from '../../components/svg/comment.svg'
import Tel from '../../components/svg/phone.svg'
import { Link } from "react-router-dom"


function Header() {
    return (
    <div className="Header">
        <div className="Header__container">
        <div className="Header__logo">
        <Link to="/"><img className="Logo" src={Logo} alt="Logo" /> <span><b>Y</b>uor <b>PRO</b>morion</span></Link>
        </div>
        <div className="Header__li">
        <ul>
            <li><Link to="">Разработка сайтов</Link></li>
            <li><Link to="">Портфолио</Link></li>
        </ul>
        </div>
        <div className="Header__connection">
        <div className="Header__conn">
        <div className="Header__conn_chat">
        <img className="Chat" src={Chat} alt="Chat" />
        </div>
        <div className="Header__conn_tel">
        <img className="Tel" src={Tel} alt="Tel" />
        </div>
        </div>
        </div>
        
        </div>
    </div>
    );
}

export default Header;