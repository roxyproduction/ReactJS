import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <div>
                <h3>Account</h3>
                <input type="text"/>
                <h3>Password</h3>
                <input type="password"/>
                <br/>
                <button>Login</button>
            </div>
        );
    }
}
export default Login;