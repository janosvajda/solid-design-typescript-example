import {IParcel} from '../interface/IParcel';
import {IVehicle} from '../interface/IVehicle';

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

    addParcel(value: IParcel) {
        this.parcels.push(value);
    }

    getId(): string {
        return this.id;
    }

    getParcels(): object {
        return this.parcels;
    }

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
