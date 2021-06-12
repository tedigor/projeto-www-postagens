const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', require('./routes'));
const port = 3000;

app.listen(port, ()=> console.log(`app is running on http://localhost:${port}`));

