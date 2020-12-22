import React from 'react'
import FullWindow from '../../components/svg/fullWindow.svg'
import MassButton from '../../components/svg/massageButton.svg'


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
    </div>
    <div className="Chat__input">
        <form action="">
        <textarea type="text" placeholder="Напишите сообщение..."></textarea>
        <button><img className="MassButton" src={MassButton} alt="MassButton" /></button>
        </form>
    </div>
    </div>
    </div>
    </div>
    );
}

export default Chat;