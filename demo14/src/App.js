import React, { Component } from 'react';
import { BrowserRouter as Router , Switch ,Route,Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import Login from './Login';

class App extends Component {
  render() {

    return (
      <div className="App">
          <Router>
              <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <hr/>

                <ul >
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
