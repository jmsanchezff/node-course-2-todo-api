var mongoose =  require('mongoose');

//new User model:
// - email - require it -trim it- set type - set min length of 1
var User = mongoose.model('User', {
    email:{
        type: String,
        require: true,
        minlength: 1,
        trim: true
    }
});

module.exports = { User }