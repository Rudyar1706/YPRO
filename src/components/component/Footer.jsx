import React from 'react'
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
<a href="https://www.instagram.com/yourpromotion.by/?hl=ru"><img className="Inst" src={Inst} alt="Inst" /></a>
    </div>
    <div className="block">
    <a href="viber://chat?number=+375(29)895-11-28"><img className="Viber" src={Viber} alt="Viber" /></a>
    </div>
    <div className="block">
    <a href="https://vk.com/dimarudkovskiy"><img className="Vk" src={Vk} alt="Vk" /></a>
    </div>
    <div className="block">
    <a href="https://telegram.im/@<manager_yourpromotion>"><img className="Telegram" src={Telegram} alt="Telegram" /></a>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Footer;