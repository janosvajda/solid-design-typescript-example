"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require('chai');
const assert = chai.assert;
const ValidateStandardParcel_1 = require("../src/lib/class/ValidateStandardParcel");
const StandardParcel_1 = require("../src/lib/class/StandardParcel");
let parcel1 = new StandardParcel_1.StandardParcel();
let parcel2 = new StandardParcel_1.StandardParcel();
let validateStandardParcel = new ValidateStandardParcel_1.ValidateStandardParcel();
describe('ValidateStandardParcel tests', function () {
    it('ValidateStandardParcel validation ID required failing', function () {
        try {
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.validate();
        }
        catch (e) {
            console.log(e);
            assert.strictEqual(e, 'Parcel ID is required');
        }
    });
    it('ValidateStandardParcel validation weight required failing', function () {
        try {
            parcel1.setParcelId(123456);
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.setParcel(parcel1);
            validateStandardParcel.validate();
        }
        catch (e) {
            console.log(e);
            assert.strictEqual(e, 'Parcel weight is required');
        }
    });
});
