export class SkiResortInfo {
    public _id: number
    public name: string

    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || "";
    }
}