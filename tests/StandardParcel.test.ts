const chai = require('chai');

const assert = chai.assert;

import {StandardParcel} from '../src/lib/class/StandardParcel';

let s = new StandardParcel();

describe('StandardParcel setLabel getLabel', function () {
    it('StandardParcel getters tests', function () {
        let parcelLabel = 'test label';
        s.setLabel(parcelLabel)
        assert.strictEqual(s.getLabel(), parcelLabel);
    });

    it('StandardParcel dimensions', function () {
        let parcelWeight = 10;
        let parcelWidth = 12;
        let parcelLength = 15;
        s.setWeight(parcelWeight);
        s.setWidth(parcelWidth);
        s.setLength(parcelLength);

        assert.strictEqual(s.getWeight(), parcelWeight);
        assert.strictEqual(s.getWidth(), parcelWidth);
        assert.strictEqual(s.getLength(), parcelLength);
    });
});