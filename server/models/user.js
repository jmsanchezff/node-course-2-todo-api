const mongoose =  require('mongoose');
const validator = require('validator');

//new User model:
// - email - require it -trim it- set type - set min length of 1
var User = mongoose.model('User', {
    email:{
        type: String,
        require: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator:  validator.isEmail,
            message: '{VALUE} is not a valid phone number!'
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]
});

module.exports = { User }