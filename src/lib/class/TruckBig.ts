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
     * Each parcels must have unique parcelId on the truck.
     */
    hasParcelsUniqueId() {
        let uniqueItems = []
        Object.values(this.getParcels()).forEach(parcel => {
            uniqueItems.push(parcel.getParcelId());
        });
        if (new Set(uniqueItems).size !== uniqueItems.length) {
            return false;
        }
        return true;
    }

    /**
     * Parcels checking on the vehicle.
     */
    checkParcels(): boolean {

        Object.values(this.getParcels()).forEach(parcel => {
            try {
                parcel.getValidator().validate();
            } catch (e) {
            }
        });

        //Truck weight must be added
        if (this.getWeight() === undefined || this.getWeight() === null) return false;

        //Each parcel must have unique parcel ID.
        if (!this.hasParcelsUniqueId()) return false;

        return true;
    }


}
