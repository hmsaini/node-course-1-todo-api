const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {User}=require('./../server/models/user');
const {Todo}=require('./../server/models/todo');


var id='5b811654ed5a69801efef111';

if(!ObjectId.isValid(id)){
    console.log('ID not valid');
}

// // Todo.find({
// //     _id:id
// // }).then((todos)=>{
// //     console.log('Todos',todos);
// // });

// // Todo.findOne({
// //     _id:id
// // }).then((todo)=>{
// //     console.log('Todo',todo);
// // });

// Todo.findById(id).then((todo)=>{     // findById is best
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
    if(!user){
        return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user,undefined,2));
},(e)=>{
    console.log(e);
});