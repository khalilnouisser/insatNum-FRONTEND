import { Component, OnInit } from '@angular/core';
import {BackendAPIService} from '../services/backend-api.service';
import {Equipment} from '../models/Equipement';
import {TableData} from '../md/md-table/md-table.component';
import {User} from '../models/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-equipment-add',
  templateUrl: './equipment-add.component.html',
  styleUrls: ['./equipment-add.component.css']
})
export class EquipmentAddComponent implements OnInit {

    constructor(private _api : BackendAPIService , private  router : Router){}

    public equipement : Equipment ;
    public listUsers : User[] = [];
    public type = 0;
    ngOnInit(){
        this.equipement = new Equipment();
        this.equipement.addBy = new User();
        this._api.getAllPersons().then(data=>{
            this.listUsers = data["result"];
            console.log(data);
        });
    }

    sendRequest(){
      this.equipement.isReserved = false;
      this.equipement.entryDate = "2018-02-22T09:39:51.989Z";
      console.log(this.equipement);
      this._api.sendEquipment(this.equipement).then(data=>{
        this.router.navigate(["equipments"]);
      });

    }
}