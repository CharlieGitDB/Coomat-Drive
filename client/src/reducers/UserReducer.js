import ActionTypes from '../types/ActionTypes'

const initState = {
    hasAuth: false
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.UPDATE_AUTH: {
            return {
                ...state,
                hasAuth: action.hasAuth
            }
        }
        default:
            return state
    }
}