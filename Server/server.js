const express = require('express');
const path = require('path');
const parser = require('body-parser');
require('dotenv').config();
const port = 3000;

const app = express();

// app.use(parser.json());
// app.use(parser.urlencoded({
//   extended: true
// }));
app.use(express.static(path.join(__dirname, '../Client/Static')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../Client/Static/index.html'));
// });


app.listen(port, (err) => err ? console.log('Error with connection: ', err) : console.log(`Connection established on port ${port}`));