In the models folder there is a hidden file from the repo StaticVariables.js.

To run this app you need create StaticVariables.js:
const STATIC_VARS = {
    dburl: {{url to mysql db with password if one is used on your db account},
    keyHash: {{a bcrypt hashed password to be able to register},
    cookieSecret: {{your cookie secret}
}

module.exports = STATIC_VARS