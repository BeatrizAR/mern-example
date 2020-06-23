const app = require('./app')
require('./database')

const port= app.get('port')

async function main(){
    await app.listen(port);
    console.log(`server on port ${port}`)
}

//app.listen(port, ()=> console.log(`server on port ${port}`))

main()