import { observe } from 'rxjs-observe'

class ErrorService {
    constructor() {
        const err = { msg: null }
        const {observables, proxy} = observe(err)
        this.observables = observables
        this.proxy = proxy
    }

    onErrorStateChange = () => {
        return this.observables.msg
    }

    /**
     * This updates the error message
     * 
     * @param {string} msg
     */
    updateError = (msg) => {
        this.proxy.msg = msg
    }

    removeError = () => {
        this.updateError(null)
    }
}

export default new ErrorService()