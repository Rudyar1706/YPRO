import React from 'react'
import {PlusSVG} from '../../import';


function Plus() {
    const arrayPoints = [
        {id: 1, value: "Низкие цены"},
        {id: 2, value: "Адаптивная верстка"},
        {id: 3, value: "Бесплатный дизайн сайта"},
        {id: 4, value: "Внутрнее SEO"},
        {id: 5, value: "Индивидуальный дизайн"},
    ]
return (
    <>
    <div className="Plus__container bg-blure">
    <div className="SVG__plus">
    <img className="PlusSVG" src={PlusSVG} alt="PlusSVG" />
        </div>  
        <div className="Points__plus">
        <div className="Center">
        <h3>Почему выбирают нас</h3>
        {arrayPoints.map(arrayPoints =>
            <div className="Points" key={arrayPoints.id}>
<span>{arrayPoints.id}</span><p>{arrayPoints.value}</p>
</div>
        )}
        </div> 
        </div> 
    </div>

</>
    );
}

export default Plus;
