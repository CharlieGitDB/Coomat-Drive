import HttpService from './HttpService'
import { observe } from 'rxjs-observe'

class AuthService {
    constructor() {
        const auth = { authorized: true }
        const {observables, proxy} = observe(auth)
        this.observables = observables
        this.proxy = proxy
    }

    onAuthStateChange = () => {
        return this.observables.authorized
    }

    logOut = () => {
        HttpService.Get('/user/logout')
            .then(res => {
                this.proxy.authorized = false
            })
            .catch(err => {
                this.proxy.authorized = false
            })
    }

    getAuth = () => {
        return new Promise((resolve, reject) => {
            HttpService.Get('/user/auth')
                .then(res => {
                    resolve(true)
                })
                .catch(err => {
                    resolve(false)
                })
        })
    }

    updateAuth = (status) => {
        this.proxy.authorized = status
    }
}

export default new AuthService()