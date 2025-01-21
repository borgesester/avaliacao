import { User } from "./user.model";

export class ListUser {
    constructor(
        public data: Array<User>,
        public total: number,
        public page: number,
        public limit: number
    ) {}
}