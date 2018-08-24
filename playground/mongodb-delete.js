const {MongoClient}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable to connect to MongoDB server');
}
console.log('Connected to MongoDB server');

// db.collection('Tods').deleteMany({text:'Eat lunch'}).then((result)=>{
// console.log(result);
// });

// db.collection('Tods').deleteOne({text:'Eat lunch'}).then((result)=>{
//     console.log(result);
//     });

db.collection('Users').findOneAndDelete({age:19}).then((result)=>{
console.log(result);
});


});