const chai = require('chai');

const assert = chai.assert;

import {Calculator} from '../src/lib/Calculator';

describe('calculate', function () {
    it('add', function () {
        let c = new Calculator();
        assert.strictEqual(c.sum(5, 2), 7);
    });
});