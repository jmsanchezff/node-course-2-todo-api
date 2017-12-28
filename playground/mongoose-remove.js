const {ObjectID}= require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findOneAndRemove({_id:'5a43c3d0debea516449df345'})
.then((todo)=>{
    console.log("Removed: ", todo)
});

Todo.findByIdAndRemove('5a43c3d0debea516449df345')
.then((todo)=>{
    console.log("Removed: ", todo)
});