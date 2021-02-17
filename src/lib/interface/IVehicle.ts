import {IParcel} from '../interface/IParcel';

/**
 * Vehicle interface.
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
     * Vehicle weight without parcels.
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

}