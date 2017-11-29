// const MongoClient = require('mongoDB').MongoClient;
const {MongoClient, ObjectID} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    // // update one
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a1e9e5b2337aba06c888fac')
    // }, {
    //     $set: { completed: true }
    // }, {
    //     returnOriginal: false
    // }). then ((result) => {
    //     console.log(result);
    // })


    //ejercicio
    db.collection('Users').findOneAndUpdate({
        name: 'JEN'
    }, {
        $set: { name: 'josema' },
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }). then ((result) => {
        console.log(result);
    })



    //db.close();
});