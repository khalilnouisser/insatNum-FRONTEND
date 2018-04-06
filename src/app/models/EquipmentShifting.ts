import {Equipment} from './Equipement';
import {User} from './User';

export interface EquipmentShifting{
    id: number;
    equipment: Equipment;
    equipmentId: number;
    user: User;
    userId: number;
    date: string;
    type: number;
    status: number;
    requestEquipmentName: string;
}