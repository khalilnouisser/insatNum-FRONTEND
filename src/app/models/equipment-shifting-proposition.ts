import {Equipment} from './Equipement';

export class EquipmentShiftingProposition {
    request: string;
    quantity: number;
    propositions: Equipment[] = [];
    shifting:number[] = [];
}
