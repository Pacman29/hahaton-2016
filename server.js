const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json());
app.use('/libs', express.static('node_modules'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});
app.use('/', express.static('public', { maxAge: 1 }));

app.get('/', function (req, res) {
  res.send('Hello World!');
})