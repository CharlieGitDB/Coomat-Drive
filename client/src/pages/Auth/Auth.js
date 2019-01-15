import React from 'react'
import { Redirect } from 'react-router-dom'
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground'
import SignUp from '../../components/SignUp/SignUp'

import './Auth.css'

const AuthContent = () => (
    <div>
        <ParticleBackground />
        <SignUp />
    </div>
)

const Auth = ({ hasAuth }) => (
    hasAuth ? (<Redirect to='/' />) : (<AuthContent />)
)

export default Auth