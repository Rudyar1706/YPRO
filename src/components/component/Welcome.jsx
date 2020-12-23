import React from 'react'
import {WelcomeSVG, Link} from '../../import';


function Welcome() {
return (
    <>
    <div className="Welcome bg-blure">
    <div className="Welcome__text">
    <h1>Your PROmotion</h1>
    <p>Разработка сайта для вашего бизнеса</p>
    <br/>
    <p>Наша команда дает возможность клиенту увидеть сайт<br/>
до его разработки БЕСПЛАТНО</p>
<Link to="/">
    <div className="Button">
    Хочу сайт
    </div>
    </Link>
    </div>
    <div className="Welcome__svg">
    <img className="WelcomeSVG" src={WelcomeSVG} alt="WelcomeSVG" />
    </div>
    </div>
</>
    );
}

export default Welcome;
