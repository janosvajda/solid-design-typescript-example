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

    it('truckBig getLoadedParcelWeight', function () {

        let truckBigTestCountOfParcels = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(22.72);

        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);

        assert.strictEqual((parcel1.getWeight() + parcel2.getWeight()), truckBigTestCountOfParcels.getLoadedParcelWeight());
    });

    it('truckBig getLoadedParcelCount', function () {

        let truckBigTestCountOfParcels = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);

        let parcel3 = new StandardParcel();
        parcel3.setParcelId(3);
        parcel3.setWeight(4.11);

        let parcel4 = new StandardParcel();
        parcel4.setParcelId(2);
        parcel4.setWeight(0.16);

        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        truckBigTestCountOfParcels.addParcel(parcel3);
        truckBigTestCountOfParcels.addParcel(parcel4);

        assert.strictEqual(4, truckBigTestCountOfParcels.getLoadedParcelCount());
    });

    it('truckBig verify === true', function () {

        let truckBigTestCountOfParcels = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);

        let parcel3 = new StandardParcel();
        parcel3.setParcelId(3);
        parcel3.setWeight(4.11);

        truckBigTestCountOfParcels.setWeight(1234.5); //truck weight must be added

        truckBigTestCountOfParcels.addParcel(parcel1);
        truckBigTestCountOfParcels.addParcel(parcel2);
        truckBigTestCountOfParcels.addParcel(parcel3);

        assert.strictEqual(true, truckBigTestCountOfParcels.verify());
    });

    it('truckBig verify === false because one of the parcel is not valid', function () {

        let truckBigTestVerifyFailed = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);

        let parcel3 = new StandardParcel();
        parcel3.setParcelId(3);

        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);
        truckBigTestVerifyFailed.addParcel(parcel3);

        try {
            truckBigTestVerifyFailed.verify();
        } catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });

    it('truckBig verify === false because truck weight is not given', function () {

        let truckBigTestVerifyFailed = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);

        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);

        try {
            let valid = truckBigTestVerifyFailed.verify();
            assert.strictEqual(false, valid);

        } catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });

    it('truckBig verify === false because trucks parcels IDs are not unique', function () {

        let truckBigTestVerifyFailed = new TruckBig();

        let parcel1 = new StandardParcel();
        parcel1.setParcelId(1);
        parcel1.setWeight(14.5);

        let parcel2 = new StandardParcel();
        parcel2.setParcelId(2);
        parcel2.setWeight(12.3);

        truckBigTestVerifyFailed.addParcel(parcel1);
        truckBigTestVerifyFailed.addParcel(parcel2);

        try {
            let valid = truckBigTestVerifyFailed.verify();
            assert.strictEqual(false, valid);

        } catch (e) {
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
});