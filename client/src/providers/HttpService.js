import store from '../store/store'
import ActionTypes from '../types/ActionTypes'

const HttpMethods = {
    GET: 'GET',
    POST: 'POST'
}

export default class HttpService {
    static Ajax(method, url = ``, data = {}) {
        let opts = {
            method: method,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        if (method === HttpMethods.POST) opts.body = JSON.stringify(data)
        
        return new Promise((resolve, reject) => {
            fetch(url, opts)
                .then(res => res.json())
                .then(res => {
                    if (this.checkForErr(res)) {
                        reject(res)
                    } else {
                        store.dispatch({ type: ActionTypes.UPDATE_ERROR, errorMsg: '' }) //not passing the second param (action) so that it is null, which removes the error
                        resolve(res)
                    }
                })
                .catch(err => {
                    this.checkForErr(err)
                    reject(err)
                })
        })
    }

    static checkForErr(err) {
        let hasErr = false
        
        if (err != null) {
            if (err.data != null && err.data.authorized != null && err.data.authorized === false) {
                store.dispatch({ type: ActionTypes.UPDATE_AUTH, hasAuth: false })
            }

            if (err.status === false) hasErr = true
        }

        return hasErr
    }

    static Get(url) {
        return this.Ajax(HttpMethods.GET, url)
    }

    static Post(url, data) {
        return this.Ajax(HttpMethods.POST, url, data)
    }
}