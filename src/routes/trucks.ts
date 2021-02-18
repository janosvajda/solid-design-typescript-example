import {TruckBig} from "../lib/class/TruckBig";

module.exports = function (app, router, trucks, parcels) {
    /**
     * List all trucks.
     */
    app.get('/trucks', function (req, res) {
        res.end(JSON.stringify(trucks));
    });

    /**
     * Create a new truck.
     */
    router.post('/trucks', function (req, res) {

        if (req.body.id !== undefined && req.body.weight !== undefined) {

            let searchTruckByID = trucks.find(t => t.id === req.body.id);

            if (searchTruckByID === undefined) {
                let truck = new TruckBig();
                truck.setId(req.body.id);
                truck.setWeight(req.body.weight);
                trucks.push(truck);
                res.write(JSON.stringify('Truck was created.'));
            } else {
                res.write(JSON.stringify('Error: this truck ID is exists.'));
            }

        } else {
            res.write(JSON.stringify('truck ID & truck weight are required.'));
        }
        res.end();
    })

    /**
     * Loading new parcel into truck.
     */
    router.put('/trucks', function (req, res) {
        if (req.body.truck_id !== undefined && req.body.parcel_id !== undefined) {
            let truck = trucks.find(t => t.id === req.body.truck_id);
            let parcel = parcels.find(p => p.id === req.body.parcel_id);

            try {
                let valid = truck.checkParcels();
                if (valid) {
                    truck.addParcel(parcel);
                    res.write(JSON.stringify(truck));
                } else {
                    res.write('Parcel duplicated');
                }
            } catch (e) {
                res.write(JSON.stringify(e));
            }

            res.end();
        }
    })

    }