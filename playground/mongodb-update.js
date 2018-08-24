const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Tods').findOneAndUpdate({
//     // _id:new ObjectId('5b7af9205fe2d019308a9ca1')
//     text:'Something to do'
// },{
//     $set:{
//         completed:true
//     }
// },{
//     returnOriginal:false
// }).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    location:'Kotli khas'
},{
    $inc:{
        age:1
    }
},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
});

});