const express=require('express')
const app=express()
app.use(express.json()); 
let mysql = require('mysql');      
app.use(express.urlencoded({extended: true})); 
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors=require('cors')
app.use(cors())
let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "JINtimesheet",
  });
db.query('select * from bauactivity',(err,res)=>{
if(err){
console.log(err)
}
else{
    console.log(res)
}})
app.listen(5000,()=>console.log("server running in port 5000")) 
// const tasks=[{
//     taskid:1,
//     task:"playing"
// }]
// app.get('/',(req,res)=>{
//     res.json(tasks)
// })
// let bauActivities = [];
// let salesActivities = [];

// app.post("/submitData", (req, res) => {
//   const { bauActivities: newBauActivities, salesActivities: newSalesActivities } = req.body;

//   bauActivities = [...bauActivities, ...newBauActivities];
//   salesActivities = [...salesActivities, ...newSalesActivities];

//   console.log("New BAU Activities:", bauActivities);
//   console.log("New Sales Activities:", salesActivities);

//   res.status(200).send("Data submitted successfully!");
// });
// // app.post("/addtask",(req,res)=>{
// //     const addId=tasks.length+1;
// //     const addTask=req.body.task
// //     tasks.push({
// //         taskid:addId,
// //         task:addTask
// //     })
// //     res.json({data:tasks})
// // })
// app.delete("/delete",(req,res)=>{
//     const deleteId=req.body.taskid
//     var j=0;
//     tasks.forEach((i)=>{
//         j=j+1;
//         if(tasks.taskid==deleteId)
//         {
//             tasks.splice(j-1,1)
//         }
//     })
//     res.json({data:tasks})
// }) 
// app.listen(5000,()=>console.log("server running in port 5000")) 

