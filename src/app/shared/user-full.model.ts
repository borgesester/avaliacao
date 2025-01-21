import { Location } from "./location.model";

export class UserFull {
    constructor(
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public id?: string,
        public title?: string,
        public gender?: string,
        public dateOfBirth?: string,
        public registerDate?: string,
        public phone?: string,
        public picture?: string,
        public location?: Location,
    ){}
}