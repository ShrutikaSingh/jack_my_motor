require('dotenv').config();

const express=require('express');
const bodyParser=require('body-parser');

const app=express();
//const port=8976;
const port=process.env.PORT;




app.use(bodyParser.urlencoded({extended:true}))

const db=require('./src/models/index.js');
//const handle=require('./handlers');

const db12=require('./src/models/index');
var promise1=db12.connectDb();





app.get('/',(req,res)=>res.send ('server is ready send the data'));
//listing to form of index.html
app.get('/form',(req,res)=>{
    res.sendFile('/Users/shrutika/Desktop/jack_my_motor/Server/'+'index.html')
    });
//displaying the output of form 
app.post('/optionsss',(req,res)=>{
res.send(req.body);
console.log(req.body);
});

/*promise1.then(async()=>{
    app.listen(port,()=>
        console.log(`listening at ${port}`),
    );
});
*/

//app.use(handle.notFound);
//app.use(handle.errors);
app.listen(port,console.log(`server listening at port :${port}`));






