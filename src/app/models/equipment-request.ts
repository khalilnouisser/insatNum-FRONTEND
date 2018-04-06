import {User} from './User';
import {EquipmentsQuantity} from './equipments-quantity';
import {EquipmentShifting} from './EquipmentShifting';

export class EquipmentRequest {
    id: number = 0;
    equipmentsQuantities: EquipmentsQuantity[];
    user: User;
    userId: number = 0;
    status: number = 0;
    date: string = "";
    shiftings: EquipmentShifting[] = [];
}
