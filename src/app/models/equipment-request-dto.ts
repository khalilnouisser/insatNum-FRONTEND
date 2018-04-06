import {User} from './User';
import {EquipmentsQuantity} from './equipments-quantity';
import {EquipmentShifting} from './EquipmentShifting';

export class EquipmentRequestDTO {
    id: number;
    equipmentsQuantities: EquipmentsQuantity[];
    user: User;
    userId: number;
    status: number;
    date: string;
    shiftings: EquipmentShifting[];
}
