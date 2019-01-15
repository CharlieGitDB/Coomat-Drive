import AuthSerivce from './AuthService'

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
        
        if (err != null && err.data != null && err.data.authorized != null && err.data.authorized === false) {
            AuthSerivce.updateAuth(false)
            hasErr = true
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