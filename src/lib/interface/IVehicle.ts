import {IParcel} from '../interface/IParcel';

export interface IVehicle {

    getId(): string;

    setId(value: string);

    getWeight(): number;

    setWeight(value: number);

    addParcel(value: IParcel);

    removeParcel(id: number);

    listParcels(): object;

}