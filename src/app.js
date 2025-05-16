const express = require('express')
const router = require('./routes')
const cors = require("cors");

const app = express()
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
};

app.use(cors());
app.use('/', router)

module.exports = app
