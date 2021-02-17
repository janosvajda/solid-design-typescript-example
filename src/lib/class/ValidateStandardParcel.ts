import {IValidateParcel} from '../interface/IValidateParcel';

import {StandardParcel} from '../class/StandardParcel';
import {IParcel} from "../interface/IParcel";

export class ValidateStandardParcel implements IValidateParcel {

    /**
     * @private
     */
    private parcel: StandardParcel;

    setParcel(value:StandardParcel) {
        this.parcel = value;
    }

    validate() {
        console.log('FASZOM', this.parcel)
    }



}
