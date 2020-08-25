import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './screens/HomePage';
import HelpPage from './screens/HelpPage';
import LoginPage from './screens/LoginPage';
import StudentDetails from './screens/StudentDetails';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/help' component={HelpPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/student-details' component={StudentDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
