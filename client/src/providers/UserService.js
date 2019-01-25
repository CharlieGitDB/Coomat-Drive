import HttpService from './HttpService'
import { observe } from 'rxjs-observe'

class UserService {
    constructor() {
        const auth = { authorized: false }
        const {observables, proxy} = observe(auth)
        this.observables = observables
        this.proxy = proxy
    }

    onAuthStateChange = () => {
        return this.observables.authorized
    }
    
    getAuth = () => {
        return new Promise((resolve, reject) => {
            HttpService.Get('/user/auth')
                .then(res => resolve(true))
                .catch(err => reject(err))
        })
    }

    /**
     * Takes in their authorization status as a boolean
     * 
     * updateAuth(true) = the user is authorized
     * updateAuth(false) = the user is not authorized
     * 
     * @param {boolean} status
     */
    updateAuth = (status) => {
        this.proxy.authorized = status
    }

    login = (username, password) => {
        return new Promise((resolve, reject) => {
            HttpService.Post('/user/login', {
                username: username,
                password: password
            })
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }

    register = (username, password, secretKey) => {
        return new Promise((resolve, reject) => {
            HttpService.Post('/user/register', {
                username: username,
                password: password,
                secretKey: secretKey
            })
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
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
}

export default new UserService()