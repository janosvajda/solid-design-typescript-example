import express = require('express');

const formData = require("express-form-data");

var bodyParser = require('body-parser');

import {TruckBig} from '../src/lib/class/TruckBig';

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

app.get('/trucks', function (req, res) {
    res.end(JSON.stringify(trucks));
});

router.post('/trucks', function (req, res) {
    console.log(req.body);
    if (req.body.id !== undefined && req.body.weight !== undefined) {

        let searchTruckByID = trucks.find(x => x.id === req.body.id);
        console.log('searchTruckByID', searchTruckByID)

        if (searchTruckByID === undefined) {
            let truck = new TruckBig();
            truck.setId(req.body.id);
            truck.setWeight(req.body.weight);
            trucks.push(truck);
        }

        console.log('All trucks:', trucks);

    }

    res.end("yes" + req.body.id);
});

router.post('/parcel', function (req, res) {
    console.log(req.body);
    if (req.body.id !== undefined && req.body.weight !== undefined) {

        let searchTruckByID = trucks.find(x => x.id === req.body.id);
        console.log('searchTruckByID', searchTruckByID)

        if (searchTruckByID === undefined) {
            let truck = new TruckBig();
            truck.setId(req.body.id);
            truck.setWeight(req.body.weight);
            trucks.push(truck);
        }

        console.log('All trucks:', trucks);

    }

    res.end("yes" + req.body.id);
});

app.listen(8080, function () {
    console.log('ddd')
});

app.use("/", router);
