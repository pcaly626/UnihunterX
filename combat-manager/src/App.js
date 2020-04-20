import React from 'react';
import Menu from './components/menu/Menu';
import './App.css';
import QuickEncounter from './components/quick_encounter/QuickEncounter';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  
  return (
   <div>
     <Provider store={store}>
     <Router>
        <Switch>
          <Route exact path="/" component={Menu}/>
          <Route path="/quick_encounter/" component={QuickEncounter}/>
        </Switch>
     </Router>
    </Provider>
   </div>
  );
}

export default App;