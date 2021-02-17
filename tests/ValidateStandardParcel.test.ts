const chai = require('chai');

const assert = chai.assert;

import {ValidateStandardParcel} from '../src/lib/class/ValidateStandardParcel';

import {StandardParcel} from '../src/lib/class/StandardParcel';

let parcel1 = new StandardParcel();

let parcel2 = new StandardParcel();

let validateStandardParcel = new ValidateStandardParcel();

describe('truckBig tests', function () {


    it('truckBig addParcels getParcels', function () {
        validateStandardParcel.setParcel(parcel1);
        validateStandardParcel.validate();
    });
});