import React, { Component } from 'react';

import './App.css';

class App extends Component {
    btnClick(){
        alert("bạn vừa click");
    }
  render() {
    return (
      <div>
          <p>{this.props.children}</p>
          <button onClick={this.btnClick}>here</button>
      </div>
    );
  }
}

export default App;
