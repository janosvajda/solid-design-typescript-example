import {IParcel} from '../interface/IParcel';

/**
 * @interface IValidateParcel
 */
export interface IValidateParcel {

    /**
     * Set parcel.
     * @param value
     */
    setParcel(value: IParcel);

    /**
     * Run validation.
     */
    validate();

    /**
     * Checks parcel ID.
     */
    checkParcelId();


}