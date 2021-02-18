import {StandardParcel} from "../lib/class/StandardParcel";

module.exports = function (app, router, parcels) {

    /**
     * List all parcels.
     */
    app.get('/parcels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(parcels));
    });

    /**
     * Create a new parcel.
     */
    router.post('/parcels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        if (req.body.id !== undefined && req.body.weight !== undefined) {

            let parcelCheckId = parcels.find(x => x.id === req.body.id);

            if (parcelCheckId === undefined) {
                try {
                    let parcel = new StandardParcel();
                    parcel.setParcelId(req.body.id);
                    parcel.setWeight(req.body.weight);
                    parcel.setLength(req.body.length);
                    parcel.setDepth(req.body.depth);
                    parcels.push(parcel);
                    res.write(JSON.stringify({'success:': 'Parcel has been created.'}));
                } catch (e) {
                    res.write(JSON.stringify({'error:': e}));
                }
            } else {
                res.write(JSON.stringify({'error:': 'Parcel ID must be unique.'}));
            }

        } else {
            res.write(JSON.stringify({'error:': 'Parcel ID & parcel weight are required.'}));
        }

        res.end();
    });

}