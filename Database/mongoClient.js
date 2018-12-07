let mongoose = require('mongoose');

module.exports = {

    init: function (configurations) {
        console.log('Connection on configurations : ' + configurations)

        let server = configurations.server;
        const database = configurations.database;
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }

}