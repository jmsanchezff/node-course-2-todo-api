require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID}= require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT;

//middleware
app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
        //completed: req.body.completed,
        //completedAt: req.body.completedAt
    });

    todo.save().then(
        (doc) => 
        {
            res.send(doc);
        },
        (err) =>
        {
            res.status(400).send(err);
        }
    );
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos)=>{
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) =>{
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch( (e)=>{
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res)=>{
    var id = req.params.id;

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if (!todo){
            return res.status(404).send();
        }
        res.send({todo})
    }).catch( (e)=>{
        res.status(400).send();
    });

});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body}, {new: true}). then((todo) =>{
        
        if(!todo){
            return res.status(400).send();
        }
        res.send({todo});

    }). catch((e)=>{
        res.status(400).send();
    })

});

app.post('/users', (req, res) => {
    
    var body = _.pick(req.body, ['email', 'password'])
    
    var user = new User({
        email: body.email,
        password: body.password
    });

    user.save().then((user) => {
        res.send({user});
    }, (err) => {
        res.status(400).send(err);
    });
});


app.listen(port, () =>{
    console.log(`Started in port ${port}`);
});

module.exports = {app};