// const MongoClient = require('mongoDB').MongoClient;
const {MongoClient, ObjectID} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err){
    //         return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'josema',
    //     age: 38,
    //     location: 'madrid' 
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // }); 


    db.close();
});