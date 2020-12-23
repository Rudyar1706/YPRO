import { Route } from 'react-router-dom';
import {Header, Section, Footer, Portfolio, Chat, ModelDevelopSite} from './import';

function App() {
  return (
    <div className="App">
<Header />
<Route exact path="/" component={Section} />
<Route exact path="/portfolio" component={Portfolio} />
<Route exact path="/chat" component={Chat} />
<Footer />
<ModelDevelopSite />
    </div>
  );
}

export default App;
