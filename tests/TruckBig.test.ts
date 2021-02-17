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

    it('truckBig addParcels getParcels', function () {
        let parcel1 = new StandardParcel();
        let parcel2 = new StandardParcel();

        truckBig.addParcel(parcel1);
    });
});