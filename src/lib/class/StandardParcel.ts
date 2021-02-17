import {IParcel} from '../interface/IParcel';

export class StandardParcel implements IParcel {

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

}
