/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./app/routes/router');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => console.log(`Server Started on Port ${port}`));
