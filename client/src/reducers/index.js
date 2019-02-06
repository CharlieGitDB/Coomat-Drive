import { combineReducers } from 'redux'

import AuthReducer from './UserReducer'
import LoadingReducer from './LoaderReducer'
import ErrorReducer from './ErrorReducer'

export default combineReducers({
    auth: AuthReducer,
    loader: LoadingReducer,
    error: ErrorReducer
})