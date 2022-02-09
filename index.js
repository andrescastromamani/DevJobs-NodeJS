const express = require('express')
const { engine } = require('express-handlebars')

const router = require('./routes/index');

const app = express()
const hostname = '127.0.0.1';
const port = 3000
//Enable engine template
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', router());
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})