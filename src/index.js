const express = require('express')
require('./db/mongoose')

const userRouter =require('./routes/user')
const taskRouter = require('./routes/tasks')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('server is up on '+ port)
})

