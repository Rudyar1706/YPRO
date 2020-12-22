import Header from './components/component/Header'
import Section from './components/component/Section'
import Footer from './components/component/Footer'
import { Route } from 'react-router-dom';
import Portfolio from './components/page/Portfolio';
import Chat from './components/page/Chat';

function App() {
  return (
    <div className="App">
<Header />
<Route exact path="/" component={Section} />
<Route exact path="/portfolio" component={Portfolio} />
<Route exact path="/chat" component={Chat} />
<Footer />
    </div>
  );
}

export default App;
