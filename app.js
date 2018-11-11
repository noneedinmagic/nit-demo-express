const express = require('express');
const app = express();
const port = 8841;

app.get('/', (req, res) => res.send('Hello NIT!'));

app.listen(port, () => console.log(`NIT App is running on port ${port}...`));
