import React, {useState} from 'react'
import {Close} from '../../import';


function ModelDevelopSite() {
    const [showModal, setShowModal] = useState(false);

    const closeModalDevelopSite = () => setShowModal(false);
    const showModalDevelopSite = () => setShowModal(true);

    return (
        <div className="ModalDevelopSite" show={showModal} onHide={closeModalDevelopSite}>
    <div className="ModalDevelopSite__fixed">
    <div className="ModalDevelopSite__container">
        <div className="close">
        <img className="Close" src={Close} alt="Close" onClick={showModalDevelopSite} />
        </div>
        <h4>Разработка сайтов</h4>
        </div>
    </div>
    </div>
    );
}

export default ModelDevelopSite;