import React, {useState} from 'react'
import {Uslug1svg, Uslug2svg, Link} from '../../import';


function Uslugi(props) {
    const [showPrice, setShowPrice] = useState('Стоимость разработки')

    const funcShowPrice = () =>{
        setShowPrice('70$')
        setTimeout(() => setShowPrice('Стоимость разработки'), 5000);
    }
return (
    <>
    <div className="Uslugi__container">
    <div className="Uslug-1 bg-blure">
    <img className="Uslug1svg" src={Uslug1svg} alt="Uslug1svg" />
    <hr/>

    <div className="Text">
    <h3>Дизайн сайта</h3>
    <p>Дизайн сайта – это внешнее оформление, которое призвано, завлечь, заинтересовать посетителя.<br/><br/>
    <i>Хочу дизайн сайта <b onClick={props.func}>БЕСПЛАНО</b></i>
    </p>
    </div>
    <Link to="/">
    <div className="Button" onClick={funcShowPrice}>
{showPrice}
    </div>
    </Link>

    </div>
    <div className="Uslug-2 bg-blure">
    <img className="Uslug2svg" src={Uslug2svg} alt="Uslug2svg" />
    <hr/>
    
    <div className="Text">
    <h3>Разработка сайта</h3>
    <p>Основными этапами процесса являются веб-дизайн,
вёрстка страниц, программирование на стороне клиента и сервера.


    </p>
    </div>

    <Link to="/">
    <div className="Button" onClick={props.func}>
    Узнать подробнее
    </div>
    </Link>
    </div>
    </div>


</>
    );
}

export default Uslugi;
