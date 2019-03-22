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
        let folderDir = `${STATIC_VARS.baseStorageDir}/${username}/${folderName}`
        if (!fs.existsSync(folderDir)) fs.mkdirSync(folderName)
    },
    async readUserFiles(username) {
        let userFiles = []
        let userDir = `${STATIC_VARS.baseStorageDir}/${username}`

        let fileNames = await fs.readdirSync(userDir)
        
        fileNames.forEach(file => {
            //need to actually create these entries when made, and read/set their mimetype
            let userFile = {id: 0, name: file, type: 'text'}
            userFiles.push(userFile)
            console.log(userFiles, 'uf')
        })

        return userFiles
    }
}

module.exports = FileSystemUtil