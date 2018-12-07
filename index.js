const express = require('express');
require('./Database/mongoClient').init({
    'server': 'localhost',
    'database': 'mosaicHunt'
});
var routeProvider = require('./Routes/routes');
const app = express()
const port = 3000


routeProvider(app);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))