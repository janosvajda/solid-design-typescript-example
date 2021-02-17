export interface IParcel {

    /**
     * Set parcel ID
     * @var number
     */
    setParcelId(value: number);

    /**
     * Returns by parcel ID
     * @var number
     */
    getParcelId(): number;

    /**
     * Set parcel label
     * @var string
     */
    getLabel(): string;

    /**
     * Return by parcel's label
     * @var string
     */
    setLabel(value: string);

    /**
     * Return by parcel's weight
     * @var number
     */
    getWeight(): number;

    /**
     * Set parcel's weight
     * @var number
     */
    setWeight(value: number);

    /**
     * Return by parcel's length
     * @var number
     */
    getLength(): number;

    /**
     * Set parcel's length
     * @var number
     */
    setLength(value: number);

    /**
     * Return by parcel's width
     * @var number
     */
    getWidth(): number;

    /**
     * Set parcel's width
     * @var number
     */
    setWidth(value: number);

    /**
     * Return by parcel's depth
     * @var number
     */
    getDepth(): number;

    /**
     * Set parcel's depth
     * @var number
     */
    setDepth(value: number);

}