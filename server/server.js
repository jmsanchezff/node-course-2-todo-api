var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//middleware
app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    });

    todo.save().then(
        (doc) => 
        {
            res.send(doc);
        },
        (err) =>
        {
            res.status(400);
            res.send(err);
        }
    );
});


//end points:
//

app.listen(3000, () =>{
    console.log('Started in port 3000');
});