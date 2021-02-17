import {IParcel} from '../interface/IParcel';
import {IVehicle} from '../interface/IVehicle';
import {IValidateParcel} from "../interface/IValidateParcel";

/**
 * @class TruckBig
 */
export class TruckBig implements IVehicle {

    /**
     * @private
     */
    private parcels: Array<IParcel>;

    /**
     * @private
     */
    private id: string;

    /**
     * @private
     */
    private weight: number;

    constructor() {
        this.parcels = new Array<IParcel>();
    }

    addParcel(value: IParcel) {
        value.getValidator().validate();
        this.parcels.push(value);
    }

    /**
     * Return by truck id.
     */
    getId(): string {
        return this.id;
    }

    /**
     * Returns by all added parcels.
     */
    getParcels(): object {
        return this.parcels;
    }

    /**
     * Returns by the vehicle weight without parcels.
     */
    getWeight(): number {
        return this.weight;
    }

    removeParcel(id: number) {
        this.parcels.shift()
    }

    setId(value: string) {
        this.id = value;
    }

    setWeight(value: number) {
        this.weight = value;
    }
}
