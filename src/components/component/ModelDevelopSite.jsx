import React from 'react'
import {Close} from '../../import';


function ModelDevelopSite(props) {
    const arrayTypesSite = [
        {
            id: 1, name: 'Landing-page', text: 'Лендинг – это небольшой одностраничный сайт, полностью заточенный под то, чтобы попадающий на него клиент выполнил целевое действие.', text2: 'Качественный, рабочий лендинг – это интересный дизайн, цепляющий продающий текст, размещенные в стратегически важных местах контакты компании и обязательный призыв совершить целевое действие. Для разработки такой страницы важно понимать, как работает человеческая психология и какие приемы и ходы могут заставить посетителя остаться. Всем своим существованием лендинг подталкивает потенциального клиента к тому, чтобы стать клиентом действующим.', styges: '', price: '100$'
        },
        {
            id: 2, name: 'Сайта-визитка', text: 'Сайт-визитка — это электронная «визитная карточка» компании или отдельного человека, с описанием деятельности. Большинство сайтов-визиток, которые встречаются в Интернете, состоят из 1-3 отдельных страниц.', text2: 'В действительности сайт визитка является успешным способом для взаимодействия с клиентом. Обычно сайт такого рода состоит из 1-3 страниц. Это главная страница, страница с краткой информацией о компании или персоне. Последняя страница, к примеру, это карта проезда, форма обратной связи для посетителей.', styges: '', price: '150$'
        },
        {
            id: 3, name: 'Сайт-каталог', text: 'Сайт-каталог– это сайт с большим количеством страниц, разделов и подразделов. Основным заданием сайта-каталога является представление перечня товаров или услуг.', text2: 'Сайт-каталог может состоят из десятков, сотен, а то и тысяч страниц. Его логическая структура зависит от перечня Ваших товаров или услуг, их типов, подтипов, видов и многого другого. Если Ваши товары объединены в подгруппы (например, моющие средства), то на сайте-каталоге будет сделан такой же подраздел. ', styges: '', price: '200$'
        }
    ]

    return (
        <>
        <div className="ModalDevelopSite">
    <div className="ModalDevelopSite__fixed">
    <div className="ModalDevelopSite__container">
        <div className="close">
        <img src={Close} alt="Close" onClick={props.func}/>
        </div>
        <div className="sectionModal">
            <h3>Разработка сайтов</h3>
            <hr/>
            <div className="developSite">
            <i>При заказе услуги сайт под ключ, вы получаете разработку дизайна <b>БЕСПЛАТНО</b></i>
            {arrayTypesSite.map(arrayTypesSite => 
            <div className="TypesSites">
                <div className="BlockText">
                <h4>{arrayTypesSite.name}</h4>
                <p>{arrayTypesSite.text}</p>
                <p>{arrayTypesSite.text2}</p>
                </div>
                <span>{arrayTypesSite.price}</span>
        </div>
                )}
        </div>
        </div>
        </div>
    </div>
    </div>
    </>
    );
}

export default ModelDevelopSite;