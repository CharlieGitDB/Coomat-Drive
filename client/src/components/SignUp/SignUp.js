import React, { Component } from 'react'
import UserService from '../../providers/UserService'
import ErrorService from '../../providers/ErrorService'

import './SignUp.css'

const FORM_STATUS = {
    LOGIN: true,
    REGISTER: false
}

class SignUp extends Component {
    state = { form: FORM_STATUS.LOGIN }
    
    onSubmit = (e) => {
        e.preventDefault()

        this.state.form === FORM_STATUS.LOGIN ? this.login() : this.register()
    }

    login = () => {
        UserService.login(this.username.value, this.password.value)
            .then(res => UserService.updateAuth(true))
            .catch(err => {
                ErrorService.updateError(err.msg)
                this.password.value = ''
            })
    }

    register = () => {
        UserService.register(this.username.value, this.password.value, this.secretKey.value)
            .then(res => UserService.updateAuth(true))
            .catch(err => {
                ErrorService.updateError(err.msg)
                this.password.value = ''
                this.secretKey.value = ''
            })
    }

    render() {
        return (
            <div className="SignUp">
                <div className="form-div" style={{transform: `translate(${this.state.form === FORM_STATUS.LOGIN ? 0 : 250}px, 0px)`}}>
                    <form onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            ref={input => {this.username = input}}
                            name="username"
                            placeholder="Username"
                            required
                        />
                        <input 
                            type="password" 
                            ref={input => {this.password = input}}
                            name="password"
                            placeholder="Password"
                            required
                        />
                        {this.state.form === FORM_STATUS.LOGIN ? '' : <input type="text" ref={input => {this.secretKey = input}} name="secretKey" placeholder="Secret Key" required />}
                        <button className="button-primary">Submit</button>
                    </form>
                </div>
                <div style={{transform: `translate(${this.state.form === FORM_STATUS.LOGIN ? 0 : -250}px, 0px)`}} className="button-div">
                    <p>{this.state.form === FORM_STATUS.LOGIN ? 'Do not have an account?' : 'Already a member?'}</p>
                    <button onClick={() => {this.setState({form: !this.state.form})}}>{this.state.form ? 'REGISTER' : 'LOGIN'}</button>
                </div>
            </div>
        )
    }
}


export default SignUp