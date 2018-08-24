const {MongoClient,ObjectId}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Tods').find({
//     _id:new ObjectId('5b7af9205fe2d019308a9ca1')
// }).toArray().then((docs)=>{
// console.log('Tods');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('Unable to fetch todos',err);
// });

db.collection('Tods').find().count().then((count)=>{
console.log('Tods count: ',count);
},(err)=>{
    console.log('Unable to fetch todos',err);
});

db.collection('Users').find().toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
});
});