const chai = require('chai');

const assert = chai.assert;

import {Calculator} from '../lib/Calculator';

describe('calculate', function () {
    it('add', function () {
        let c = new Calculator();
        assert.equal(-1, [1, 2, 3].indexOf(4));
    });
});