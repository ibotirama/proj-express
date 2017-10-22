const express = require('express')
const path = require('path')
const app = express()

const port = 3000

const indexRoutes = require('./routes/index')
const clientsRoutes = require('./routes/clients')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use((req, res, next) => {
    console.log('I was here - Middleware')
    next()
})
app.use('/', indexRoutes)
app.use('/clients', clientsRoutes)

app.listen(port, () => console.log ('Listening on port: ' + port))