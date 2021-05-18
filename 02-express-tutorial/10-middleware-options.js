const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger.js')
const authorize = require('./authorize.js');
// req => middleware => res

// app.use([logger, authorize]);
// app.use(express.static('./public'))
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
})

app.get('/api/products', (req, res) => {
    res.send('<h1>Products Page</h1>')
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('<h1>Items Page</h1>')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000...");
})