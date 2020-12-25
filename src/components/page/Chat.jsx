import React from 'react'
import {MassButton} from '../../import';
// import IconAdmin from '../../components/images/4koBjuntPDA.jpg'

function Chat() {
    return (
        <div className="Chat">
            <div className="Chat__container">
            <div className="ChatBlock">
            <div className="ChatBlock__header">
            <div className="ChatBlock__header_block">
            <div className="User">
            <div className="User__Icon">
            <p>И</p>
                </div> 
                <p>Вы: Имя</p>
                </div>  
    </div>
    <div className="ChatBlock__dialogs">

    <div className="ChatBlock__dialogs-admin">
    <div className="Massage__admin">

    </div>
    <div className="Icon__admin">
    </div>
    </div>


    <div className="ChatBlock__dialogs-user">
    <div className="Icon__user">
        
        </div>
    <div className="Massage__user">
        <p></p>
    </div>
    </div>
    </div>
    <div className="ChatBlock__input">
        <form action="">
        <textarea type="text" placeholder="Напишите сообщение..." ></textarea>
        <button><img className="MassButton" src={MassButton} alt="MassButton" /></button>
        </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Chat;