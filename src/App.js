import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Design from './components/design';
import Home from './components/home';
import Resume from './components/resume';

import Footer from './components/footer'
import ScrollToTop from './components/scroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/design" component={Design} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
