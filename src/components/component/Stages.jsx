import React from 'react'



function Stages() {
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
    <>
    <div className="Stages__container">
    <h3>Этапы разработки сайта</h3>  
    <div className="Stages">
        {arrayStages.map(arrayStages =>
        <div className="Stage bg-blure" key={arrayStages.id}>
            <span>{arrayStages.id}</span><p>{arrayStages.value}</p>
            </div>
        )}
        </div>
    </div>   

</>
    );
}

export default Stages;
