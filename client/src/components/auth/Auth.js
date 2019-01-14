import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { particlesOpt, particleCss } from './particlesconfig'

class Auth extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Particles id="particles" params={particlesOpt} style={particleCss} />
            </div>
        )
    }
}



export default Auth