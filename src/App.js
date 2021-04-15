import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import SmallBanner from './Components/SmallBanner/SmallBanner';
import Row from './Components/Row/Row';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <SmallBanner/>
        <Switch>
          <Route path="/">
            <Banner/>
            <Row/>
          </Route>
          <Route path='/movie'>
            <Banner/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
