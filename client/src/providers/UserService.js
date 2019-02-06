import HttpService from './HttpService'
import ActionTypes from '../types/ActionTypes'
import store from '../store/store'

class UserService {
    getAuth = () => {
        return new Promise((resolve, reject) => {
            HttpService.Get('/user/auth')
                .then(res => resolve(true))
                .catch(err => reject(err))
        })
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

    logOut = () => HttpService.Get('/user/logout')

    updateAuth = (hasAuth) => {
        store.dispatch({ type: ActionTypes.UPDATE_AUTH, hasAuth })
    }
}

export default new UserService()