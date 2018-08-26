const {ObjectId}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {User}=require('./../server/models/user');
const {Todo}=require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id:'5b82509c346711b56a48a932'}).then((todo)=>{

// });

Todo.findByIdAndRemove('5b82509c346711b56a48a932').then((todo)=>{
console.log(todo);
});