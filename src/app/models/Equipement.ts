import {User} from './User';

export class Equipment {
    id: number = 0;
    name: string = "";
    ref: string = "";
    entryDate: string = "";
    price: number = 0;
    status: number = 0;
    currentStatus: number = 0;
    isReserved: boolean = false;
    addBy?: User = new User();
}