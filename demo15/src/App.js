import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component{
    render(){
        var myStyle={border:'1px solid blue',width:'100px',height:'100px',color:'black'

        }
        return(
            <div>
                <ReactCSSTransitionGroup transitionName="exemple"
                transitionAppear = {true} transitionAppearTimeout = {1000}
                transitionEnter = {false} transitionLeave = {false}>

                <h1>
                    được rồi nè
                </h1>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default App;