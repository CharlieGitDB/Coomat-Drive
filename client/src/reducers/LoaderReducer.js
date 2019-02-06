import ActionTypes from '../types/ActionTypes'

const initState = {
    fullLoading: false,
    loading: false
}

export default function reducer(state = initState, action) {
    switch(action.type) {
        case ActionTypes.LOADING_DATA: {
            return { ...state, loading: true }
        }
        case ActionTypes.FULL_LOADING_DATA: {
            return { ...state, fullLoading: true }
        }
        case ActionTypes.HIDE_LOADING_DATA: {
            return { ...state, loading: false }
        }
        case ActionTypes.UPDATE_AUTH:
        case ActionTypes.HIDE_FULL_LOADING_DATA: {
            return { ...state, fullLoading: false }
        }
        default:
            return state
    }
}