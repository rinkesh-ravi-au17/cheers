const express = require ('express');
const bodyParser = require ('body-parser');
// import router from './route/route';

const app = express();
const port = 3500;

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${port}`)
})

