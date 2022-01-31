require('dotenv').config();

const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 4000;

// Routes
const indexRouter = require('./routes');

// Middle-ware

// router
// app.use('/', indexRouter);

// test용
app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
