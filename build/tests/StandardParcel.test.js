"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require('chai');
const assert = chai.assert;
const StandardParcel_1 = require("../src/lib/class/StandardParcel");
let s = new StandardParcel_1.StandardParcel();
describe('StandardParcel setLabel getLabel', function () {
    it('StandardParcel getters tests', function () {
        let parcelLabel = 'test label';
        s.setLabel(parcelLabel);
        assert.strictEqual(s.getLabel(), parcelLabel);
    });
    it('StandardParcel dimensions', function () {
        let parcelDepth = 10.42;
        let parcelWidth = 12;
        let parcelLength = 15.1;
        s.setDepth(parcelDepth);
        s.setWidth(parcelWidth);
        s.setLength(parcelLength);
        assert.strictEqual(s.getDepth(), parcelDepth);
        assert.strictEqual(s.getWidth(), parcelWidth);
        assert.strictEqual(s.getLength(), parcelLength);
    });
    it('StandardParcel parcelWeight', function () {
        let parcelWeight = 10.342;
        s.setWeight(parcelWeight);
        assert.strictEqual(s.getWeight(), parcelWeight);
    });
    it('StandardParcel parcelId', function () {
        let id = 1;
        s.setParcelId(id);
        assert.strictEqual(s.getParcelId(), id);
    });
});
