const express = require('express');
const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes')

const app = express();
const PORT = process.env.PORT || 3001;

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// start server after DB connection
db.connect(err => {
    if (err)  throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server runningon port ${PORT}`);
    });
});