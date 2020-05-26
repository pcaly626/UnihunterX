import React, { Fragment, Component } from 'react';
import Menu from './menu/Menu';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import QuickEncounter from './QuickEncounter';
import store from '../store';
import './App.css';
class App extends Component {

  render() {
      return(
          <Provider store={store}>
                  <Router>
                          <Fragment>
                              <div className="App-container">
                                    <Switch>
                                        <Route exact path="/" component={Menu}/>
                                        <Route exact path="/quick_encounter/" component={QuickEncounter}/>
                                    </Switch>
                                </div>
                          </Fragment>
                  </Router>
          </Provider>
      );
  }
}

export default App;