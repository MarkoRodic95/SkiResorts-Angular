import { SkiResortInfo } from './ski-resort-info';

export class SkiResortInfoList {
    resortList: SkiResortInfo[]

    constructor(obj?:any) {
        this.resortList = obj || ""
    }
}