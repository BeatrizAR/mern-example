require('dotenv').config()
const express =require('express')
const cors = require('cors')
const app = express()
require('./database')

//configuraciones
const port= process.env.PORT
app.use(cors())
app.use(express.json())

//routes

app.use('/',require('./routes/userRoute'))

async function main(){
    await app.listen(port);
    console.log(`server on port ${port}`)
}

//app.listen(port, ()=> console.log(`server on port ${port}`))

main()