const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Passes here always');
    next();
});

app.use('/users', (req, res, next) => {
    res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Welcome page</h1>');
});

app.listen(3000);