import React from 'react'
import {Uslug1svg, Uslug2svg, Link} from '../../import';


function Uslugi(props) {
return (
    <>
    <div className="Uslugi__container">
    <div className="Uslug-1 bg-blure">
    <img className="Uslug1svg" src={Uslug1svg} alt="Uslug1svg" />
    <hr/>

    <div className="Text">
    <h3>Дизайн сайта</h3>
    <p>Проектирование пользовательских веб-интерфейсов для сайтов или веб-приложений.<br/><br/>
    <i>Эту услугу можно получить БЕСПЛАТНО, при заказе услуги разработка сайта*</i>
    </p>
    </div>
    <Link to="/">
    <div className="Button">
    Стоимость разработки
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
    <div className="Button" onClick={props.showModalDevelopSite}>
    Стоимость разработки
    </div>
    </Link>
    </div>
    </div>


</>
    );
}

export default Uslugi;
