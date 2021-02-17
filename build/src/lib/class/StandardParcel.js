"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardParcel = void 0;
const ValidateStandardParcel_1 = require("../class/ValidateStandardParcel");
/**
 * @class StandardParcel
 */
class StandardParcel {
    getLabel() {
        return this.label;
    }
    setLabel(value) {
        this.label = value;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(value) {
        this.weight = value;
    }
    getLength() {
        return this.length;
    }
    setLength(value) {
        this.length = value;
    }
    getWidth() {
        return this.width;
    }
    setWidth(value) {
        this.width = value;
    }
    getDepth() {
        return this.depth;
    }
    setDepth(value) {
        this.depth = value;
    }
    getParcelId() {
        return this.id;
    }
    setParcelId(value) {
        this.id = value;
    }
    getValidatorName() {
        return 'ValidateStandardParcel';
    }
    getValidator() {
        let validator = new ValidateStandardParcel_1.ValidateStandardParcel();
        validator.setParcel(this);
        return validator;
    }
}
exports.StandardParcel = StandardParcel;
