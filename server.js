const express = require('express')
const app = express()
const port = 9000
//const morgan = require('morgan');
//app.use(morgan('dev'));
app.use(express.static('public'));
app.get('*', (req, res) => res.sendFile(__dirname + '/'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))