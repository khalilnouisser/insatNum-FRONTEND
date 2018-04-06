import { Component, OnInit } from '@angular/core';
import {BackendAPIService} from '../services/backend-api.service';
import {EquipmentRequestDTO} from '../models/equipment-request-dto';
import {EquipmentShifting} from '../models/equipment-shifting';
import {ActivatedRoute} from '@angular/router';
import {EquipmentShiftingProposition} from '../models/equipment-shifting-proposition';
import {TableData} from '../md/md-table/md-table.component';
import {EquipmentRequest} from '../models/equipment-request';

@Component({
  selector: 'app-reception-equipments',
  templateUrl: './reception-equipments.component.html',
  styleUrls: ['./reception-equipments.component.css']
})
export class ReceptionEquipmentsComponent implements OnInit {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute,private _api : BackendAPIService) {}

    public tableData1: TableData;
    public list : EquipmentShiftingProposition[] = [];
    public requestE : EquipmentRequest ;

    ngOnInit() {
      this.requestE = new EquipmentRequest();
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
            this._api.getEquipmentRequest(this.id).then(data=>{
                this.requestE = data["result"];
            });
        });
        this.tableData1 = {
            headerRow: [ 'Materiel', 'Ref', 'État retourné'],
            dataRows: []
        };
    }
    sendRequest(){
        this._api.sendEquipmentReceptionRequest(this.requestE,this.id).then(data=>{
            console.log(data);
        });
    }


}
