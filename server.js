require('./config/db')

const app = require('express')()
const bodyParser = require('express').json

const port = 4000

const UserRouter = require('./api/User')

app.use(bodyParser())

app.use('/user', UserRouter)

app.listen(port, ()=>{
    console.log(`Server is runnignon port ${port}`)
})