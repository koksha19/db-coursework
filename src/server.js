const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('Hello!');
});

server.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})