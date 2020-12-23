import React from 'react'
import {Link} from 'react-router-dom'


function Portfolio() {
    const arraySite = [
        {id: 1, nameSite: "yourpromotion.by", text: "Разработка сайтов для вашего бизнеса", url: "http://yourpromotion.by/"},
        {id: 2, nameSite: "pafix.by", text: "Сервис по ремонту мобильных устройств", url: "http://pafix.by/"},
        {id: 3, nameSite: "smart-service.by", text: "Сервис по ремонту электронных блоков управления", url: "http://smart-service.by/"},
    ]

    return (
        <div className="Section">
    <div className="Portfolio">
        <div className="Portfolio__container bg-blure">
<h3>Портфолио</h3>
<div className="Portfolio__site">
{arraySite.map(arraySite =>
    <div className="Site bg-blure" key={arraySite.id}>
    <h4>{arraySite.nameSite}</h4>
    <p>{arraySite.text}</p>
    <Link href={arraySite.url} target="_blank">
    <div className="Button">
    Посетить
    </div>
    </Link>
    </div>)}


    
    

    </div>
    </div>
    </div>
    </div>
    );
}

export default Portfolio;