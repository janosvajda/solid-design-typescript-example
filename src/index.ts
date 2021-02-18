import express = require('express');

const formData = require("express-form-data");

//No database. Just using arrays.
let parcels = [];
let trucks = [];

// Create a new Express app instance
const app: express.Application = express();

const router = express.Router();

const options = {
    autoClean: true
};

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

/**
 * Routing for trucks.
 */
require('./routes/trucks')(app, router, trucks, parcels);

/**
 * Routings for parcels.
 */
require('./routes/parcels')(app, router, parcels);


app.listen(8080, function () {
    console.log('load-a-truck is listening.')
});

app.use("/", router);
