let mongoose = require('mongoose');
let validator = require('validator')



let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
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
    },
    isloggedin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'lastLogin'
    }
})

module.exports = mongoose.model('user', userSchema);