const chai = require('chai');

const assert = chai.assert;

import {TruckBig} from '../src/lib/class/TruckBig';

let truckBig = new TruckBig();

describe('truckBig setId getId', function () {
    it('StandardParcel getters tests', function () {
        let truckId = 'ABC-12-345';
        truckBig.setId(truckId);

        assert.strictEqual(truckBig.getId(), truckId);
    });
});