import React, { Component } from 'react'

import FullLoader from './components/FullLoader/FullLoader'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import AuthService from './providers/AuthService'

import './App.css'

class App extends Component {  
  componentDidMount() {
    this.watchAuth()
  }
 
  state = {
    hideLoader: false,
    hasAuth: false
  }

  watchAuth() {
    AuthService.getAuth().then(authStatus => {
      AuthService.onAuthStateChange().subscribe(hasAuth => {
        this.setState({
          hideLoader: true,
          hasAuth: hasAuth
        })
      })
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.hideLoader ? null : <FullLoader /> }
        <Header hasAuth={this.state.hasAuth} />
        <Main hasAuth={this.state.hasAuth} />
      </div>
    )
  }
}

export default App
