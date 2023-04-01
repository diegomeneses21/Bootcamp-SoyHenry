const express = require('express');
const server = express();
const port = 3001;
const router = require('./router');
const morgan = require('morgan');

// Middlewares
server.use(express.json());
server.use(morgan('dev'));
server.use('/', router);
server.use('/home', router);
// server.use('/todo', router);

server.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});

