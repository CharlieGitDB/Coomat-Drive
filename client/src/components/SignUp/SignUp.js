import React, { Component } from 'react'
import './SignUp.css'

const FORM_STATUS = {
    LOGIN: true,
    REGISTER: false
}

class SignUp extends Component {
    constructor() {
        super()
        
        this.state = { form: FORM_STATUS.LOGIN }
    }

    componentDidMount() {
    }

    onSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="SignUp">
                <div className="form-div" style={{transform: `translate(${this.state.form === FORM_STATUS.LOGIN ? 0 : 250}px, 0px)`}}>
                    <form onSubmit={this.onSubmit}>
                        <input placeholder="Username" type="text" />
                        <input placeholder="Password" type="password" />
                        {this.state.form === FORM_STATUS.LOGIN ? '' : <input placeholder="Re-typed password" type="password" />}
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