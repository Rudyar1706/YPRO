import React, {useState} from 'react'
import {FullWindow, MassButton} from '../../import';
// import IconAdmin from '../../components/images/4koBjuntPDA.jpg'

function Chat() {

    return (
        <div className="Chat">
            <div className="Chat__container">
            <div className="Chat__header">
            <div className="Chat__header_block">
            <div className="User">
            <div className="User__Icon">
            <p>И</p>
                </div> 
                <p>Вы: Имя</p>
                </div>  
                <div className="Chat-fullWindow">
                <img className="FullWindow" src={FullWindow} alt="FullWindow" />
                </div> 
    </div>
    <div className="Chat__dialogs">

        
    <div className="Chat__dialogs-admin">
    <div className="Massage__admin">

    </div>
    <div className="Icon__admin">
    </div>
    </div>


    <div className="Chat__dialogs-user">
    <div className="Icon__user">
        
        </div>
    <div className="Massage__user">
        <p></p>
    </div>
    </div>
    </div>
    <div className="Chat__input">
        <form action="">
        <textarea type="text" placeholder="Напишите сообщение..." ></textarea>
        <button><img className="MassButton" src={MassButton} alt="MassButton" /></button>
        </form>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Chat;