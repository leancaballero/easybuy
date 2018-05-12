import React, { Component } from 'react';
import './App.css';

class MyNavBarLogin extends Component {

    constructor(props){
        super(props);
        this.state={
            logged: localStorage.getItem("isLogged")
        }
        this.doLogin=this.doLogin.bind(this)
        this.doLogout=this.doLogout.bind(this)
    }

    doLogin() {
        localStorage.setItem("isLogged", true);
        this.setState({
            logged:true
        })    
        console.log(localStorage.getItem("isLogged"))
    }

    doLogout() {
        localStorage.setItem("isLogged", false);
        this.setState({
            logged:false
        })
        console.log(localStorage.getItem("isLogged"))
    }


    render() {
        console.log(localStorage.getItem("isLogged"))
        if (localStorage.getItem("isLogged") == true) {
            return (
                <div>
                    <p>Logged</p>
                    <button onClick={this.doLogout}>BOTON pa false</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>nope Logged</p>
                    <button onClick={this.doLogin}>BOTON</button>            
                </div>
            );
        }
    }
}

export default MyNavBarLogin;