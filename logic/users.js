let usersSchema = require('../schema/users');

add = function (user) {
    let userToAdd = new usersSchema(user);
    console.log(userToAdd)
    userToAdd.save((error, result) => {
        if (error) {
            console.log(error);
            console.error('error is saving user');
        } else {
            console.log(result);
        }

    });
}
module.exports = {
    Add: add
}