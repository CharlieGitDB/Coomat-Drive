import ActionTypes from '../types/ActionTypes'

export const updateError = (errorMsg) => {
    return {
        type: ActionTypes.UPDATE_ERROR,
        errorMsg
    }
}