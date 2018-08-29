import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'Value Default'
        }
        this.updateState=this.updateState.bind(this)
    }
    updateState(e){
        this.setState({data:e.target.value});
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState}/>
                <br/>
                <h4>{this.state.data}</h4>
            </div>
        );
    }
}

export default App;
