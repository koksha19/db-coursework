require('dotenv').config();
const express = require('express');
//const pool = require('./config/connectDb');

const dataRoutes = require('./routes/dataRoutes');
const accessRoutes = require('./routes/accessRoutes');

const app = express();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/data', dataRoutes);
app.use('/access', accessRoutes);

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})