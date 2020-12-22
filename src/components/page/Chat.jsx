import React from 'react'
import PlusSVG from '../../components/svg/fullWindow.svg'


function Chat() {

    return (
        <div className="Chat">
            <div className="Chat__container bg-blure">
            <div className="Chat__header">
            <div className="Chat__header_block">
            <div className="User">
            <div className="User__Icon">
            <p>И</p>
                </div> 
                <p>Вы: Имя</p>
                </div>  
                <div className="Chat-fullWindow">
                <img className="PlusSVG" src={PlusSVG} alt="PlusSVG" />
                </div> 
    </div>
    <div className="Chat__section">
    </div>
    <div className="Chat__input">
    </div>
    </div>
    </div>
    </div>
    );
}

export default Chat;