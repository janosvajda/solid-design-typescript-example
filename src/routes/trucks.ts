import {TruckBig} from "../lib/class/TruckBig";

module.exports = function (app, router, trucks, parcels) {
    /**
     * List all trucks.
     */
    app.get('/trucks', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(trucks));
    });

    /**
     * Create a new truck.
     */
    router.post('/trucks', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        if (req.body.id !== undefined && req.body.weight !== undefined) {

            let searchTruckByID = trucks.find(t => t.id === req.body.id);

            if (searchTruckByID === undefined) {
                let truck = new TruckBig();
                truck.setId(req.body.id);
                truck.setWeight(req.body.weight);
                trucks.push(truck);
                res.write(JSON.stringify({'success:': 'Truck was created.'}));
            } else {
                res.write(JSON.stringify({'error:': 'This truck ID is exists.'}));
            }

        } else {
            res.write(JSON.stringify({'error:': 'Truck ID & truck weight are required.'}));
        }
        res.end();
    })

    /**
     * Loading new parcel into truck.
     */
    router.put('/trucks', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        if (req.body.truck_id !== undefined && req.body.parcel_id !== undefined) {
            let truck = trucks.find(t => t.id === req.body.truck_id);
            let parcel = parcels.find(p => p.id === req.body.parcel_id);
            try {
                let valid = truck.checkParcels();
                if (valid) {
                    truck.addParcel(parcel);
                    res.write(JSON.stringify(truck));
                } else {
                    res.write(JSON.stringify({'error:': 'Parcel is not valid: check parcel weight, please. It is required.'}));
                }
            } catch (e) {
                res.write(e);
            }

            res.end();
        }
    })

    }