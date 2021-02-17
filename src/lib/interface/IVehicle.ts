import {IParcel} from '../interface/IParcel';

/**
 * @interface IVehicle.
 */
export interface IVehicle {

    /**
     * Returns by vehicle ID
     * @var string
     */
    getId(): string;

    /**
     * Set vehicle ID
     * @param value
     */
    setId(value: string);

    /**
     * Vehicle weight without parcels in kilogram
     * @var number
     */
    getWeight(): number;

    /**
     * Set weight of vehicle.
     * @param value
     */
    setWeight(value: number);

    /**
     * Load new parcel to the vehicle.
     * @param value
     */
    addParcel(value: IParcel);

    /**
     * Remove parcel from vehicle.
     * @param id
     */
    removeParcel(id: number);

    /**
     * Retunrs by all parcels.
     */
    getParcels(): object;

    /**
     * Set parcels
     */
    setParcels(parcels: Array<IParcel>)

    /**
     * Weight of all loaded parcels.
     */
    getLoadedParcelWeight(): number

    /**
     * Count of all loaded parcels.
     */
    getLoadedParcelCount(): number

    /**
     * Checks parcel Ids uniqueness.
     */
    hasParcelsUniqueId(): boolean

    /**
     * Verify the whole vehicle.
     */
    checkParcels() : boolean
}