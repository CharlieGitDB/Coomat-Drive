const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')
const Response = require('./models/Response')
const StaticVariables = require('./models/StaticVariables')
const AuthUtil = require('./utils/AuthUtil')
const FSUtil = require('./utils/FileSystemUtil')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const filesRouter = require('./routes/file')

//create the storage base directory
FSUtil.createBaseStorage()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    key: 'user_sid',
    secret: StaticVariables.cookieSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}))

app.use(AuthUtil.clearSessionIfNoUser)

app.use('/', indexRouter)
app.use('/user', usersRouter)
app.use('/admin', adminRouter)
app.use('/file', filesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.send(new Response(null, err, false))
})


module.exports = app
