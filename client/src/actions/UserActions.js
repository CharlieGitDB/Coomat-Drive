import ActionTypes from '../types/ActionTypes'
import UserService from '../providers/UserService'

export const getAuth = (dispatch) => {
    dispatch({ type: ActionTypes.FULL_LOADING_DATA })

    UserService.getAuth()
        .then(() => dispatch(updateAuth(true)))
        .catch(() => dispatch(updateAuth(false)))
}

export const logOut = (dispatch) => {
    dispatch({ type: ActionTypes.FULL_LOADING_DATA })

    UserService.logOut()
        .then(() => dispatch(updateAuth(false)))
        .catch(() => dispatch(updateAuth(false)))
}

export const updateAuth = (hasAuth) => {
    return {
        type: ActionTypes.UPDATE_AUTH,
        hasAuth
    }
}