const express = require('express')
const app = express()

const port = 3000

const indexRoutes = require('./routes/index')
const clientsRoutes = require('./routes/clients')

app.use((req, res, next) => {
    console.log('I was here - Middleware')
    next()
})
app.use('/', indexRoutes)
app.use('/clients', clientsRoutes)

app.listen(port, () => console.log ('Listening on port: ' + port))