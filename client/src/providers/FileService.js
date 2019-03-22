import HttpService from './HttpService'
import ActionTypes from '../types/ActionTypes'
import store from '../store/store'

class FileService {
    getFiles = () => {
        return new Promise((resolve, reject) => {
            HttpService.Get('/file')
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}

export default new FileService()