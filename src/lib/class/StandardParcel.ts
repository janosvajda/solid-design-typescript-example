import {IParcel} from '../interface/IParcel';
import {ValidateStandardParcel} from '../class/ValidateStandardParcel';

/**
 * @class StandardParcel
 */
export class StandardParcel implements IParcel {

    /**
     * @private
     */
    private id: number;

    /**
     * @private
     */
    private label: string;

    /**
     * @private
     */
    private weight: number;

    /**
     * @private
     */
    private length: number;

    /**
     * @private
     */
    private width: number;

    /**
     * @private
     */
    private depth: number


    getLabel(): string {
        return this.label;
    }

    setLabel(value: string) {
        this.label = value;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(value: number) {
        if (isNaN(value)) throw 'Weight must be numeric.';
        this.weight = value;
    }

    getLength(): number {
        return this.length;
    }

    setLength(value: number) {
        this.length = value;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(value: number) {
        this.width = value;
    }

    getDepth(): number {
        return this.depth;
    }

    setDepth(value: number) {
        this.depth = value;
    }

    getParcelId(): number {
        return this.id;
    }

    setParcelId(value: number) {
        this.id = value;
    }

    getValidatorName(): string {
        return 'ValidateStandardParcel';
    }

    getValidator(): ValidateStandardParcel {
        let validator = new ValidateStandardParcel();
        validator.setParcel(this);
        return validator;
    }


}
