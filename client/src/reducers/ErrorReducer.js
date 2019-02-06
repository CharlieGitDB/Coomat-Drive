import ActionTypes from '../types/ActionTypes'

const initState = {
    errorMsg: ''
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.UPDATE_ERROR: {
            return {
                ...state,
                errorMsg: action.errorMsg
            }
        }
        default:
            return state
    }
}