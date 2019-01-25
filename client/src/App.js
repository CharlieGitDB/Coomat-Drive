import React, { Component } from 'react'

import FullLoader from './components/FullLoader/FullLoader'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import Main from './components/Main/Main'

import UserService from './providers/UserService'
import ErrorService from './providers/ErrorService'

import './App.css'

class App extends Component {
    state = {
        hideLoader: false,
        hasAuth: false,
        errorMsg: ''
    }
    
    componentWillMount() {
        this.watchAuth()
        this.watchError()
    }
    
    getInitAuth() {
        return new Promise(resolve => {
            UserService.getAuth()
                .then(() => UserService.updateAuth(true))
                .catch(() => UserService.updateAuth(false))
                .finally(() => resolve())
        })
    }

    watchAuth() {
        this.getInitAuth()
            .then(() => {
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
