const {ObjectID}= require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a43b29815f0769c2b4669ab11';

// if (!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if (!todo){
//         return console.log('id not found')
//     }
//     console.log('Todo by Id', todo);
// }).catch((e)=>console.log(e));

var id = "5a255e77e616452434074687"

User.findById(id).then((user) =>{
    if (!user){
        return console.log("No user with that id")
    }
    console.log(JSON.stringify(user, undefined, 2));
}). catch((e)=> console.log(e));