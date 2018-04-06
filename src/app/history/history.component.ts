import { Component, OnInit } from '@angular/core';
import {TableData} from '../md/md-table/md-table.component';
import {BackendAPIService} from '../services/backend-api.service';
import {Equipment} from '../models/Equipement';
import {forEach} from '@angular/router/src/utils/collection';
import {EquipmentShifting} from '../models/EquipmentShifting';
import {ActivatedRoute} from '@angular/router';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

    constructor(private route: ActivatedRoute, private _api : BackendAPIService){}

    public tableData1: TableData;
    public id = 0;
    public list : EquipmentShifting[] = [];
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            if(isNaN(this.id)){
                this.id = 0;
            }
            this._api.listEquipmentShifting(this.id).then(data=>{
                this.list = data['result'];
            });
        });
        this.tableData1 = {
            headerRow: [ 'Matériel', 'Membre', 'État',  'Nature' ,'Date'],
            dataRows: []
        };


    }
}
