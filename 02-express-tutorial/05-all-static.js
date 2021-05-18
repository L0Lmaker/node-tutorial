const express = require('express');
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('<h1> Resource not Found</h1>')
})



app.listen(5000, () => {
    console.log('server started at port 5000');
})