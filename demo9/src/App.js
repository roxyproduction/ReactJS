import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
        this.setNemNumber=this.setNemNumber.bind(this)
    }
    setNemNumber(){
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <button onClick={this.setNemNumber}>Click Me</button>
                <br/>
                <Content myNumber={this.state.count}></Content>
            </div>
        );
    }
}
class Content extends React.Component{
    componentWillMount(){
        console.log('this is willmount')
    }
    componentDidMount(){
        console.log(" this is DidMount")
    }
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    componentWillReceiveProps(newProps){
        console.log("this is WillReceiveProps")
    }

    componentWillUpdate(nextProps,nextState){
        console.log("this is Component Will update")
    }
    componentDidUpdate(prevProps,prevState){
        console.log("this is Did Update")
    }
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default App;
