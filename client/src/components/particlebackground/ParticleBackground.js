import React from 'react'
import Particles from 'react-particles-js'
import { particlesOpt, particleCss } from '../particlebackground/particlesconfig'
import './ParticleBackground.css'

const ParticleBackground = () => (
    <div>
        <div id="background"></div>
        <Particles id="particles" params={particlesOpt} style={particleCss} />
    </div>
)

export default ParticleBackground