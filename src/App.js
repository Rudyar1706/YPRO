import React, {useState} from 'react'
import { Route } from 'react-router-dom';
import {Header, Section, Portfolio, Chat, ModelDevelopSite, Registration} from './import';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalDevelopSite = () => {
    setShowModal(true)
    if(ModelDevelopSite){
      document.body.classList.add("modelScroll")
  }
  }
  const closeModalDevelopSite = () => {
    setShowModal(false)
    document.body.classList.remove("modelScroll")
  };
  
  return (
    <div className="App">
<Header />
<Route exact path="/" >
  <Section func={showModalDevelopSite}/>
</Route>
<Route exact path="/portfolio" component={Portfolio} />
<Route exact path="/registration" component={Registration} />
<Route exact path="/chat" component={Chat} />
{showModal && <ModelDevelopSite func={closeModalDevelopSite}/>}
    </div>
  );
}

export default App;
