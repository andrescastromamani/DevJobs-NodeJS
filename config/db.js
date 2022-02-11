const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', (err) => {
    console.log(err);
    process.exit();
})

//models
require('../models/Vacancy');