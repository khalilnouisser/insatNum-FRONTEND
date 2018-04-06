import { Component, OnInit } from '@angular/core';
import {TableData} from '../md/md-table/md-table.component';
import {BackendAPIService} from '../services/backend-api.service';
import {Equipment} from '../models/Equipement';
import {forEach} from '@angular/router/src/utils/collection';
import {ActivatedRoute} from '@angular/router';



declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

    constructor(private _api : BackendAPIService, private _route : ActivatedRoute){}

    public tableData1: TableData;
    public list : Equipment[] = [];
    public keyword : String = "";
    public limit = 10;
    public offset = 0;
    public nbPages = 0;
    public pages = [];
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Name', 'Ref', 'Nature' , 'État actuel', 'Price', 'Date','Ajouté par' , 'Actions'],
            dataRows: []
        };

        this._route.params.subscribe(params => {
            this.keyword = params['keyword'];
            if(this.keyword == null) this.keyword = "";
            this.getData();
        });
    }
    goToPage(page){
        console.log("go to",page);
        this.offset = page;
        this.getData();
    }
    getData(){
        this._api.listEquipment(this.keyword,this.limit,this.offset).then(data=>{
            this.list = data["result"];
            this.nbPages = +data["nbPages"];
            this.pages = [];
            for (var i = 1;i<this.nbPages ; i++){
                this.pages.push(i);
            }
        });
    }
    removeProduct(index){
        var c = confirm("voulez-vous supprimer ce materiel ?");
        if(c){
            this._api.removeEquipment(this.list[index].id).then(data=>{
                if(data["status"] == 1){
                    this.list.splice(index,1);
                }
            });
        }
    }
}
