import {IParcel} from '../interface/IParcel';
import {IVehicle} from '../interface/IVehicle';
import {split} from "ts-node";

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

        let parcels = this.getParcels();
        let parcelItem = (Object.values(parcels)).find(p => p.getParcelId() === parcel.getParcelId());

        if ( parcelItem === undefined) {
            this.parcels.push(parcel);
            console.log('PINA', this.parcels)
            console.log('GECI', parcel)

        } else {
             throw 'Parcel has been added to this vehicle';
        }
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

    setParcels(parcels) {
        this.parcels = parcels;
    }

    /**
     * Returns by the vehicle weight without parcels.
     */
    getWeight(): number {
        return this.weight;
    }

    /**
     * Remove parcel from the vehicle.
     * @param id
     */
    removeParcel(id: number) {

        const removeItem = (removeId) => {
            const res = Object.values(this.getParcels()).filter(obj => obj.id !== removeId);
            return res;
        }
        this.setParcels(removeItem(id));
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
     * @deprecated This is deprectaed and not in use anymore.
     */
    hasParcelsUniqueId() {
        let uniqueItems = []

        Object.values(this.getParcels()).forEach(parcel => {
            uniqueItems.push(parcel.getParcelId());
        });

        if (new Set(uniqueItems).size !== Object.values(this.getParcels()).length) {
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

        return true;
    }


}
