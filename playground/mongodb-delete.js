// const MongoClient = require('mongoDB').MongoClient;
const {MongoClient, ObjectID} = require('mongoDB');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }

    console.log('Connected to mongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat lunch'}). then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // })


    //delete duplicated names
    // db.collection('Users').deleteMany({name: 'josema'}).then((result)=>{
    //     console.log(result);
    // });

    //delete by id of mike
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a1cb448db5b395a10356be4')})
    .then((result)=>{
            console.log(JSON.stringify(result, undefined, 2));
        });

    //db.close();
});