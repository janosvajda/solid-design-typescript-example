import express = require('express');
const formData = require("express-form-data");

var bodyParser = require('body-parser');

let trucks = [];

// Create a new express app instance
const app: express.Application = express();

const router = express.Router();

const options = {
    autoClean: true
};

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

app.get('/', function (req, res) {
    res.send('dddd');
});

router.post('/truck', function (req, res) {
    console.log(req.body);
    res.end("yes" + req.body.id);
});

app.listen(8080, function () {
    console.log('ddd')
});

app.use("/", router);
