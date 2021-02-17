import {IValidateParcel} from '../interface/IValidateParcel';

import {StandardParcel} from '../class/StandardParcel';

/**
 * @class ValidateStandardParcel
 */
export class ValidateStandardParcel implements IValidateParcel {

    /**
     * @private
     */
    private parcel: StandardParcel;

    setParcel(value:StandardParcel) {
        this.parcel = value;
    }

    validate() {
        this.checkParcelId();
        this.checkParcelWeight();
    }

    checkParcelId() {
        if (this.parcel.getParcelId() === undefined) throw 'Parcel ID is required';
    }

    checkParcelWeight() {
        if (this.parcel.getWeight() === undefined) throw 'Parcel weight is required';
    }

}
