import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:''
        }
        this.updateState=this.updateState.bind(this);//update value input
        this.clearInput=this.clearInput.bind(this);//cũng giống update value input , khi xóa bắt buộc phải có dòng này
    }
    updateState(e){
        this.setState({data:e.target.value});
    }
    clearInput(){
        this.setState({data:''});
        ReactDOM.findDOMNode(this.refs.myText).focus();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} ref="myText"/>
                <button onClick={this.clearInput}>Clear</button>
                <br/>
                <h4>{this.state.data}</h4>

            </div>
        );
    }
}
export default App;
