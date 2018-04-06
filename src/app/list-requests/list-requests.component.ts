import { Component, OnInit } from '@angular/core';
import {BackendAPIService} from '../services/backend-api.service';
import {Equipment} from '../models/Equipement';
import {TableData} from '../md/md-table/md-table.component';
import {EquipmentRequest} from '../models/equipment-request';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {

    constructor(private _api : BackendAPIService){}

    public tableData1: TableData;
    public list : EquipmentRequest[] = [];
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Demande', 'Membre', 'Date', 'État', 'Actions'],
            dataRows: []
        };

        this._api.listEquipmentRequests().then(data=>{
            this.list = data['result'];
        });
    }
    accept(id:number,index:number){
      this._api.acceptEquipmentRequest(id).then(data=>{
          if(data["result"] != null){
              this.list[index].status = 1;
          }
      });
    }
    refuse(id:number,index:number){
        this._api.refuseEquipmentRequest(id).then(data=>{
            if(data["result"] != null){
                this.list[index].status = 2;
            }
        });
    }
}