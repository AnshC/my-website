import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Design from './components/design';
import Home from './components/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/design" component={Design} />
      </div>
    </Router>
  );
}

export default App;
