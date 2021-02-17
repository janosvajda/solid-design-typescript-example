const chai = require('chai');

const assert = chai.assert;

import {ValidateStandardParcel} from '../src/lib/class/ValidateStandardParcel';

import {StandardParcel} from '../src/lib/class/StandardParcel';

let parcel1 = new StandardParcel();

let parcel2 = new StandardParcel();

let validateStandardParcel = new ValidateStandardParcel();

describe('ValidateStandardParcel tests', function () {

    it('ValidateStandardParcel validation ID required failing', function () {
        try {
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.validate();
        } catch (e) {
            console.log(e);
            assert.strictEqual(e, 'Parcel ID is required');
        }
    });

    it('ValidateStandardParcel validation weight required failing', function () {
        try {
            parcel1.setParcelId(123456)
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.validate();
        } catch (e) {
            console.log(e);
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
});