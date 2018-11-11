const express = require('express');
const app = express();
const port = process.env.PORT || 8841;
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Hello NIT!'));

app.get('/hello', (req, res) => res.render('hello', {testVar: 'testValue'}));
app.get('/hello/:name', (req, res) => res.render('hello', {name: req.params.name}));

app.listen(port, () => console.log(`NIT App is running on port ${port}...`));
