import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAuth, logOut } from './actions'

import FullLoader from './components/FullLoader/FullLoader'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import Main from './components/Main/Main'

import './App.css'

class App extends Component {
    componentWillMount() {
        this.props.getAuth()
    }

    render() {
        return (
            <div className="App">
                {this.props.hideLoader ? null : <FullLoader />}
                <Header hasAuth={this.props.hasAuth} logOut={this.props.logOut} />
                {this.props.errorMsg === null || this.props.errorMsg === '' ? null : <Error msg={this.props.errorMsg} />}
                <Main hasAuth={this.props.hasAuth} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    hasAuth: state.auth.hasAuth,
    hideLoader: !state.loader.fullLoading,
    errorMsg: state.error.errorMsg
})

const mapDispatchToProps = dispatch => ({
    getAuth: () => dispatch(getAuth),
    logOut: () => dispatch(logOut)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
