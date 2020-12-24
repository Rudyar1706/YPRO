import React, {useState} from 'react'
import { Route } from 'react-router-dom';
import {Header, Section, Footer, Portfolio, Chat, ModelDevelopSite} from './import';

function App() {
  const [showModal, setShowModal] = useState(false);
  const showModalDevelopSite = () => setShowModal(true);
  
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
<Route exact path="/chat" component={Chat} />
<Footer />
{showModal && <ModelDevelopSite func={closeModalDevelopSite}/>}
    </div>
  );
}

export default App;
