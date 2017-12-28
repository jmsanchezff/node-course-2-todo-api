const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb')

var {app} =  require('./../server');
const {User} = require('./../models/user');

const users = [
    {
        _id : new ObjectID(),
        email : "existing@email.com",
        password: "123123"
    }
];

beforeEach((done) => {
    User.remove().then(()=>{
        return User.insertMany(users);
    }).then(()=>done());
});


describe('POST /users', () => {
    it('should create a new user', (done)=> {
        var email = 'new@email.com';
        var password ='abc123'

        request(app)
            .post('/users')
            .send({email, password})
            .expect(200)
            .expect((res) => {
                expect(res.body.user.email).toBe(email);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                User.find({email}).then((users)=> {
                    expect(users.length).toBe(1);
                    expect(users[0].email).toBe(email);
                    done();
                }).catch((e)=>done(e));
            });
    });


    it('should not create a new user if repeated email', (done) => {
        var email = users[0].email;
        var password ='abc123'

        request(app)
        .post('/users')
        .send({email, password})
        .expect(400)
        .end((err, res) => {
            if (err) {
                 return done(err);
            }

            User.find().then((users) => {
                expect(users.length).toBe(1);
                done();
            }).catch((e)=>done(e));
        });
    });

    it('should not create a new user if invalid email', (done) => {
        var email = 'in@valid@mail';
        var password ='abc123'

        request(app)
        .post('/users')
        .send({email, password})
        .expect(400)
        .end((err, res) => {
            if (err) {
                 return done(err);
            }

            User.find().then((users) => {
                expect(users.length).toBe(1);
                done();
            }).catch((e)=>done(e));
        });
    });
})