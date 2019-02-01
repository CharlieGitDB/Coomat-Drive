import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import './Main.css'

import AuthRoute from '../AuthRoute/AuthRoute'
import Auth from '../../pages/Auth/Auth'
import Base from '../../pages/Base/Base'

const Main = ({ hasAuth }) => (
    <main className={'Main ' + (hasAuth ? 'fit-content' : '')}>
        <Router>
            <Switch>
                <Route exact path="/login" render={props => <Auth hasAuth={hasAuth} {...props} />} />
                <AuthRoute exact path="*" hasAuth={hasAuth} component={Base} />
            </Switch>
        </Router>
    </main>
)

export default Main