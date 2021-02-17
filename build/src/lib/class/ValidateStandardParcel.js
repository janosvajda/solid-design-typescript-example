"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateStandardParcel = void 0;
/**
 * @class ValidateStandardParcel
 */
class ValidateStandardParcel {
    setParcel(value) {
        this.parcel = value;
    }
    validate() {
        this.checkParcelId();
        this.checkParcelWeight();
    }
    checkParcelId() {
        if (this.parcel.getParcelId() === undefined)
            throw 'Parcel ID is required';
    }
    checkParcelWeight() {
        if (this.parcel.getWeight() === undefined)
            throw 'Parcel weight is required';
    }
}
exports.ValidateStandardParcel = ValidateStandardParcel;
