import React from 'react'

function Registration() {
    return (
        <div className="Registration">
            <div className="Registration__container bg-blure">
            <div className="Registration__Block">
            <h4>Зарегестрируйтесь, чтобы начать общаться с Администратором сайта</h4>
                <form action="/chat">
                    <input type="text" placeholder="Ваше имя"/>
                    <button type="submit" className="btn">Регистрация</button>
                </form>
                </div> 
    </div>
    </div>
    );
}

export default Registration;