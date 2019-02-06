import ActionTypes from '../types/ActionTypes'
import store from '../store/store'

class ErrorService {
    updateError = (errorMsg) => {
        store.dispatch({ type: ActionTypes.UPDATE_ERROR, errorMsg })
    }

    removeError = () => {
        store.dispatch({ type: ActionTypes.UPDATE_ERROR, errorMsg: '' })
    }
}

export default new ErrorService()