// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectId}=require('mongodb');

var obj=new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to mongodb server');
}
console.log('Connected to MongoDB Server');


// db.collection('Tods').insertOne({
// text:'Something to do',
// completed:false
// },(err,result)=>{
// if(err){
//     return console.log('Unable to insert todo',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
// name:'Harpreet Saini',
// age:19,
// location:'Kotli khas'
// },(err,results)=>{
//     if(err){
//         return console.log('Unable to insert user',err);
//     }
//     console.log(results.ops);
// });


db.close();
});