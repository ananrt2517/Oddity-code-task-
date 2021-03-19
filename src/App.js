import Header from './components/Header';
import Landing from './pages/Landing/Landing';
import SingleFact from './pages/Singlefact/SingleFact';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/:id" component={SingleFact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
