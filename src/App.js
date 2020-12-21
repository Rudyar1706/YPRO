import Header from './components/component/Header'
import Section from './components/component/Section'
import Footer from './components/component/Footer'
import { Route } from 'react-router-dom';
import Portfolio from './components/page/Portfolio';

function App() {
  return (
    <div className="App">
<Header />
<Route exact path="/" component={Section} />
<Route exact path="/portfolio" component={Portfolio} />
<Footer />
    </div>
  );
}

export default App;
