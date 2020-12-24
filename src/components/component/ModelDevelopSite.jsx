import React from 'react'
import {Close} from '../../import';


function ModelDevelopSite(props) {
if(ModelDevelopSite){
    document.body.classList.add("modelScroll")
}



    return (
        <>
        <div className="ModalDevelopSite">
    <div className="ModalDevelopSite__fixed">
    <div className="ModalDevelopSite__container">
        <div className="close">
        <img className="Close" src={Close} alt="Close" onClick={props.func}/>
        </div>
        <h4>Разработка сайтов</h4>
        </div>
    </div>
    </div>
    </>
    );
}

export default ModelDevelopSite;