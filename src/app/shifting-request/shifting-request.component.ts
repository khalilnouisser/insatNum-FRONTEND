import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendAPIService} from '../services/backend-api.service';
import {EquipmentRequest} from '../models/equipment-request';
import {TableData} from '../md/md-table/md-table.component';
import {EquipmentShiftingProposition} from '../models/equipment-shifting-proposition';
import {forEach} from '@angular/router/src/utils/collection';
import {EquipmentRequestDTO} from '../models/equipment-request-dto';
import {EquipmentShifting} from '../models/equipment-shifting';

@Component({
  selector: 'app-shifting-request',
  templateUrl: './shifting-request.component.html',
  styleUrls: ['./shifting-request.component.css']
})
export class ShiftingRequestComponent implements OnInit {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute,private _api : BackendAPIService) {}

    public tableData1: TableData;
    public list : EquipmentShiftingProposition[] = [];

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this._api.getPreShifting(this.id).then(data=>{
                this.list = data['result'];
                this.list.forEach(function(elm) {
                    elm.shifting = [];
                    for (let i = 0 ; i<elm.quantity; i++){
                        elm.shifting.push(0);
                    }
                });
                console.log(this.list);
            });
        });
        this.tableData1 = {
            headerRow: [ 'Besion', 'Quantité', 'Materiels à donner'],
            dataRows: []
        };
    }
    sendRequest(){
        let jsonToSend = new EquipmentRequestDTO();
        jsonToSend.shiftings = [];
        this.list.forEach(function(elm) {
            for (let i = 0 ; i<elm.quantity; i++){
                let eq = new EquipmentShifting();
                eq.equipmentId = elm.shifting[i];
                jsonToSend.shiftings.push(eq);
            }
        });
        console.log(jsonToSend);
        this._api.sendEquipmentShiftingRequest(jsonToSend,this.id).then(data=>{
            console.log(data);
        });
    }


}
