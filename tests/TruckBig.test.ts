const chai = require('chai');

const assert = chai.assert;

import {TruckBig} from '../src/lib/class/TruckBig';

import {StandardParcel} from '../src/lib/class/StandardParcel';


let truckBig = new TruckBig();

describe('truckBig tests', function () {
    it('truckBig setId getId', function () {
        let truckId = 'ABC-12-345';
        truckBig.setId(truckId);
        assert.strictEqual(truckBig.getId(), truckId);
    });

    it('truckBig setWeight getWeight', function () {
        let truckWeight = 4567.4; //it is kg
        truckBig.setWeight(truckWeight);
        assert.strictEqual(truckBig.getWeight(), truckWeight);
    });

    it('truckBig setWeight getWeight', function () {
        let truckWeight = 4567.4; //it is kg
        truckBig.setWeight(truckWeight);
        assert.strictEqual(truckBig.getWeight(), truckWeight);
    });

    it('truckBig parcel validation failing', function () {
        let parcel1 = new StandardParcel();
        try {
            parcel1.getValidator().validate();
            truckBig.addParcel(parcel1);
        } catch (e) {
            assert.strictEqual(e, 'Parcel ID is required');
        }
    });

    it('truckBig parcel validation OK', function () {
        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(12.45);
        try {
            parcel1.getValidator().validate();
            truckBig.addParcel(parcel1);
        } catch (e) {
            assert.strictEqual(e, null);
        }
    });

    it('truckBig getparcels', function () {

        let truckBigTestCountOfParcels = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(12.45);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(32.45);

        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);

        let parcels = truckBigTestCountOfParcels.getParcels();
        assert.strictEqual(2, Object.values(parcels).length);
    });

    it('truckBig getparcels', function () {

        let truckBigTestCountOfParcels = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(22.72);

        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);

        let weightOfAllParcelstOnTruck = truckBigTestCountOfParcels.getLoadedParcelWeight();
        assert.strictEqual((parcel1.getWeight() + parcel2.getWeight()), weightOfAllParcelstOnTruck);
    });
});