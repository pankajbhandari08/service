let mongoose = require('mongoose');
let validator = require('validator')
let profileSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => {
            return validator.isEmail(value);
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 3
    }
})

module.exports = mongoose.model('profile', profileSchema);