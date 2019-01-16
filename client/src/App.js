import React, { Component } from 'react'

import FullLoader from './components/FullLoader/FullLoader'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import Main from './components/Main/Main'

import UserService from './providers/UserService'
import ErrorService from './providers/ErrorService'

import './App.css'

class App extends Component {
    componentDidMount() {
        this.watchAuth()
        this.watchError()
    }

    state = {
        hideLoader: false,
        hasAuth: false,
        errorMsg: ''
    }

    watchAuth() {
        UserService.getAuth().then(authStatus => {
            UserService.onAuthStateChange().subscribe(hasAuth => {
                this.setState({
                    hideLoader: true,
                    hasAuth: hasAuth
                })
            })
        })
    }

    watchError() {
        ErrorService.onErrorStateChange().subscribe(errMsg => this.setState({ errorMsg: errMsg }))
    }

    render() {
        return (
            <div className="App">
                {this.state.hideLoader ? null : <FullLoader />}
                <Header hasAuth={this.state.hasAuth} />
                {this.state.errorMsg === null || this.state.errorMsg === '' ? null : <Error msg={this.state.errorMsg} />}
                <Main hasAuth={this.state.hasAuth} />
            </div>
        )
    }
}

export default App
