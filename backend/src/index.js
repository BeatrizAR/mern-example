require('dotenv').config()
const express =require('express')
const cors = require('cors')
const app = express()
require('./database')
const http =require('http').createServer(app)
const io = require('socket.io')(http)

//configuraciones
const port= process.env.PORT
app.use(cors())
app.use(express.json())

io.on('connection', socket => {
    //obtendra quien envio el mensaje y el mensaje
    socket.on('message',({ name, message }) => {
        //emitira el mensaje
        io.emit('message', { name, message })
    })
})


//routes

app.use('/',require('./routes/userRoute'))

async function main(){
    await http.listen(port);
    console.log(`server on port ${port}`)
}

//app.listen(port, ()=> console.log(`server on port ${port}`))

main()