// dependencies
const db = require('./db/connection');

// start DB connection
db.connect(err => {
    if (err)  throw err;
    console.log('Database connected.');
});

