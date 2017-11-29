// const MongoClient = require('mongoDB').MongoClient;
const {MongoClient, ObjectID} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    //db.collection('Todos').find( 
    //     {
    //         _id: new ObjectID('5a1d16763dd67d64230676f5')
    //     })
    //     .toArray()
    //     .then((docs) => {
    //     console.log('TODOS:');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err)=> {
    //     console.log('Unable to fetch todos');
    // });

    // db.collection('Todos').find().count().then( (count)=>{
    //      console.log(`TODOS count: ${count}`);
    //     }, (err)=> {
    //         console.log('Unable to fetch TODOS...', err);
    //     });

    var usersFindCursor = db.collection('Users').find({name: 'josema'});

    usersFindCursor.count().then((count) => {
        console.log(`Number of Users with name josema: ${count}`);
    }, (err) => {
        return console.log('Unable to fetch USERS...', err);
    });

    usersFindCursor.toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    //db.close();
});