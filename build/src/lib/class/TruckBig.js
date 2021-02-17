"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckBig = void 0;
/**
 * @class TruckBig
 */
class TruckBig {
    constructor() {
        this.parcels = new Array();
    }
    addParcel(parcel) {
        this.parcels.push(parcel);
    }
    /**
     * Return by truck id.
     */
    getId() {
        return this.id;
    }
    /**
     * Returns by all added parcels.
     */
    getParcels() {
        return this.parcels;
    }
    setParcels(parcels) {
        this.parcels = parcels;
    }
    /**
     * Returns by the vehicle weight without parcels.
     */
    getWeight() {
        return this.weight;
    }
    /**
     * Remove parcel from the vehicle.
     * @param id
     */
    removeParcel(id) {
        const removeItem = (removeId) => {
            const res = Object.values(this.getParcels()).filter(obj => obj.id !== removeId);
            return res;
        };
        this.setParcels(removeItem(id));
    }
    setId(value) {
        this.id = value;
    }
    setWeight(value) {
        this.weight = value;
    }
    /**
     * Weight of all loaded parcels.
     */
    getLoadedParcelWeight() {
        let result = 0;
        Object.values(this.getParcels()).forEach(parcel => {
            result += parcel.getWeight();
        });
        return result;
    }
    /**
     * Count of all loaded parcels.
     */
    getLoadedParcelCount() {
        return Object.values(this.getParcels()).length;
    }
    /**
     * Each parcels must have unique parcelId on the truck.
     */
    hasParcelsUniqueId() {
        let uniqueItems = [];
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
    checkParcels() {
        Object.values(this.getParcels()).forEach(parcel => {
            try {
                parcel.getValidator().validate();
            }
            catch (e) {
            }
        });
        //Truck weight must be added
        if (this.getWeight() === undefined || this.getWeight() === null)
            return false;
        //Each parcel must have unique parcel ID.
        if (!this.hasParcelsUniqueId())
            return false;
        return true;
    }
}
exports.TruckBig = TruckBig;
