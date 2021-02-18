import {StandardParcel} from "../lib/class/StandardParcel";

module.exports = function (app, router, parcels) {

    /**
     * List all trucks
     */
    app.get('/parcels', function (req, res) {
        res.end(JSON.stringify(parcels));
    });

    /**
     * Create new parcel.
     */
    router.post('/parcels', function (req, res) {
        if (req.body.id !== undefined && req.body.weight !== undefined) {

            let parcelCheckId = parcels.find(x => x.id === req.body.id);
            console.log('parcelCheckId', parcelCheckId)

            if (parcelCheckId === undefined) {
                let parcel = new StandardParcel();

                parcel.setParcelId(req.body.id);
                parcel.setWeight(req.body.weight);
                parcel.setLength(req.body.length);
                parcel.setDepth(req.body.depth);
                parcels.push(parcel);

                res.write('Parcel has been created');
                res.end();

            } else {
                res.write('Parcel ID must be unique');
                res.end();
            }

            console.log('All parcels:', parcels);
        } else {
            res.write(JSON.stringify('Parcel ID & parcel weight are required.'));
            res.end();
        }

    });

}