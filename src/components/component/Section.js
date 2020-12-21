import React from 'react'
import { Link } from "react-router-dom"
import WelcomeSVG from '../../components/svg/Weclomesvg.svg'
import Uslug1svg from '../../components/svg/isometric-2-768x530 1.svg'
import Uslug2svg from '../../components/svg/Website-Design-1 1.svg'
import PlusSVG from '../../components/svg/undraw_setup_wizard 1.svg'


function Section() {
    const arrayPoints = [
        {id: 1, value: "Низкие цены"},
        {id: 2, value: "Адаптивная верстка"},
        {id: 3, value: "Бесплатный дизайн сайта"},
        {id: 4, value: "Внутрнее SEO"},
        {id: 5, value: "Индивидуальный дизайн"},
    ]
    const arrayStages = [
        {id: 1, value: "Оформление заявки"},
        {id: 2, value: "Составление технического задания"},
        {id: 3, value: "Разработка дизайна и согласование с клиентом"},
        {id: 4, value: "Верстка, програмирование, доработка"},
        {id: 5, value: " Анализ сайтов конкурентов и выбор эффективных вариантов "},
        {id: 6, value: "Создание макета с указанием основных разделов"},
        {id: 7, value: "Предоплата 30% от полной цены"},
        {id: 8, value: "Отправка проекта клиенту и оплата 100% "},
    ]
return (
    <div className="Section">
    <div className="Section__container">
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
    <div className="Button">
    Стоимость разработки
    </div>
    </Link>
    </div>
    </div>

    <div className="Plus__container bg-blure">
    <div className="SVG__plus">
    <img className="PlusSVG" src={PlusSVG} alt="PlusSVG" />
        </div>  
        <div className="Points__plus">
        <div className="Center">
        <h3>Почему выбирают нас</h3>
        {arrayPoints.map((arrayPoints, index) =>
            <div className="Points" key={index}>
<span>{arrayPoints.id}</span><p>{arrayPoints.value}</p>
</div>
        )}
        </div> 
        </div> 
    </div>


    <div className="Stages__container">
    <h3>Этапы разработки сайта</h3>  
    <div className="Stages">
        {arrayStages.map((arrayStages, index) =>
        <div className="Stage bg-blure">
            <span>{arrayStages.id}</span><p>{arrayStages.value}</p>
            </div>
        )}
        </div>
    </div>

    <div className="Portfolio__button">
    <div className="Portfolio__button__container bg-blure">
    <Link to="/portfolio">
    <div className="Button">
    Портфолио
    </div>
    </Link>
</div>
    </div>


    </div>
    </div>
    );
}

export default Section;
