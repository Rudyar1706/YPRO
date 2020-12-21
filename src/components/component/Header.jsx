import React, {useState} from 'react'
import Logo from '../../components/svg/LOGOYPRO.svg'
import Chat from '../../components/svg/comment.svg'
import Tel from '../../components/svg/phone.svg'
import Jivo from '../../components/images/logo_jivosite.png'
import { Link } from "react-router-dom"


function Header() {
    const [showChat, setshowChat] = useState(false);

    function showChatText(){
        setshowChat(!showChat)
}



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
            <li><Link to="portfolio">Портфолио</Link></li>
        </ul>
        </div>
        <div className="Header__connection">
        <div className="Header__conn">
        <div className="Header__conn_chat">
        <img className="Chat" src={Chat} alt="Chat" onClick={showChatText} />
        {showChat && <div className="Header__hint">
                <img className="Jivo" src={Jivo} alt="Jivo" />
                <div className="Header__hint_container">
                <p>Вы можете общаться с разработчиком на прямую ,
        через чат “JIVO “ прикрепленный снизу(синиго цвета)
        <br/>
        А также вы можете через чат оформлять заказ , 
        пишите в чат ХОЧУ САЙТ и вам отправят документ с 
        образцом ТЗ(техническое задание)</p>
                </div>
            </div> }
        </div>
        <div className="Header__conn_tel">
        <img className="Tel" src={Tel} alt="Tel" />
        </div>
        </div>
        </div>
        
        </div>
    </div>
</> 
    );
}

export default Header;