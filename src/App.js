import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Design from './components/design';
import Home from './components/home';
import Footer from './components/footer'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/design" component={Design} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
