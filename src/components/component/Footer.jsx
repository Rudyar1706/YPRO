import React from 'react'
import { Link } from "react-router-dom"
import Inst from '../../components/svg/instagram.svg'
import Viber from '../../components/svg/viber.svg'
import Vk from '../../components/svg/vk.svg'
import Telegram from '../../components/svg/telegram.svg'


function Footer() {
    return (
    <div className="Footer">
        <div className="Footer__container">
<h4>Мы в соц. сетях </h4>
<div className="Seti">
<div className="block">
<Link to="/"><img className="Inst" src={Inst} alt="Inst" /></Link>
    </div>
    <div className="block">
    <Link to="/"><img className="Viber" src={Viber} alt="Viber" /></Link>
    </div>
    <div className="block">
    <Link to="/"><img className="Vk" src={Vk} alt="Vk" /></Link>
    </div>
    <div className="block">
    <Link to="/"><img className="Telegram" src={Telegram} alt="Telegram" /></Link>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Footer;