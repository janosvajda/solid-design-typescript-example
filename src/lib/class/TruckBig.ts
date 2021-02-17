import {IParcel} from '../interface/IParcel';
import {IVehicle} from '../interface/IVehicle';

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

    addParcel(parcel: IParcel) {
        this.parcels.push(parcel);
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

    /**
     * Weight of all loaded parcels.
     */
    getLoadedParcelWeight(): number {
        let result = 0;
        Object.values(this.getParcels()).forEach(parcel => {
            result += parcel.getWeight();
        })
        return result;
    }

    /**
     * Count of all loaded parcels.
     */
    getLoadedParcelCount(): number {
        return Object.values(this.getParcels()).length
    }

    /**
     * Parcels checking on the vehicle.
     */
    verify(): boolean {
        Object.values(this.getParcels()).forEach(parcel => {
            try {
                parcel.getValidator().validate();
            } catch (e) {
            }
        });

        //Truck weight must be added
        if (this.getWeight() === undefined) return false;

        return true;
    }

}
