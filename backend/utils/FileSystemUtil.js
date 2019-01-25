const fs = require('fs')
const STATIC_VARS = require('../models/StaticVariables')

const FileSystemUtil = {
    createBaseStorage() {
        if (!fs.existsSync(STATIC_VARS.baseStorageDir)) fs.mkdirSync(STATIC_VARS.baseStorageDir)
    },
    createUserDirectory(username) {
        let usernameDir = `${STATIC_VARS.baseStorageDir}/${username}`
        if (!fs.existsSync(usernameDir)) {
            fs.mkdirSync(usernameDir)

            //create trash
            let trashDir = `${usernameDir}/trash`
            if (!fs.existsSync(trashDir)) fs.mkdirSync(trashDir)

            let fileDir = `${usernameDir}/files`
            if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir)
        }
    },
    newFolder(username, folderName) {
        let folderDir = `${STATIC_VARS.baseStorageDir}/${username}/files/${folderName}`
        if (!fs.existsSync(folderDir)) fs.mkdirSync(folderName)
    }
}

module.exports = FileSystemUtil