const mongoose = require('mongoose');
const express = require('express');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const path = require('path');

require('dotenv').config();

const router = require('./routes/index');
const db = require('./config/db');

const app = express()
const hostname = '127.0.0.1';
const port = process.env.PORT;
//Enable engine template
app.engine('handlebars',
    engine({
        defaultLayout: 'main',
        helpers: require('./helpers/handlebars')
    })
);
app.set('view engine', 'handlebars');
app.set('views', './views');

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({ mongooseConnection: mongoose.connection })
}));

app.use('/', router());

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})