import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Nav/>
          <Section/>
          <Footer/>
      </div>
    );
  }
}
class Header extends Component{
    render(){
        return(
            <div>Header 1</div>
        );
    }
}
class Nav extends Component{
    render(){
        return(
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">App</a></li>
            </ul>
        );
    }
}
class Section extends Component{
    render(){
        return(
            <div>
                <h1>Welcome To My Blog </h1>
                <h4>This is the frist my project with ReactJS</h4>
            </div>
        );
    }
}
class Footer extends Component{
    render(){
        var myStyle={
            textAlign:'center',
            color:'blue'
        }
        return (
            <div style={myStyle}>&copy; 2018 Lê huy</div>
        );
    }
}
export default App;
