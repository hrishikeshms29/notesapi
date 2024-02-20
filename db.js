const { Client } = require('node-postgres');
 
const client=new Client({
        user: 'postgres',
        host: '127.0.0.1',
        database: 'notes',
        password: '',
        port: 5432
});

const db=client.connect().then(()=>{console.log("connected to postgress successfully")}).catch((e)=>{console.log(e)})

module.exports=client;