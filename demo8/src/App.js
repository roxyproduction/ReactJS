import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(){
      super();
      this.state={
          count:0
      }
  }
  btnclick(){
      this.setState({
          count:this.state.count + 1
      });
  }
    render() {
    return (
      <div>
          <h1>Value : {this.state.count}</h1>
          <br/>
          <button onClick={this.btnclick.bind(this)}>Click Me</button>
      </div>
    );
  }
}

export default App;
