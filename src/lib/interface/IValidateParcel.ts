import {IParcel} from '../interface/IParcel';

export interface IValidateParcel {

    setParcel(value: IParcel);
    validate();
    checkParcelId();

}