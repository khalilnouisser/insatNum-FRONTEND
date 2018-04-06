import { Component, OnInit } from '@angular/core';
import {BackendAPIService} from '../services/backend-api.service';
import {User} from '../models/User';
import {Equipment} from '../models/Equipement';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-equipment-edit',
  templateUrl: './equipment-edit.component.html',
  styleUrls: ['./equipment-edit.component.css']
})
export class EquipmentEditComponent implements OnInit {

    constructor(private route: ActivatedRoute,private _api : BackendAPIService , private  router : Router){}

    public equipement : Equipment ;
    public id = 0;
    public type = 0;
    ngOnInit(){
        this.equipement = new Equipment();
        this.equipement.addBy = new User();
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this._api.getEquipmentById(this.id).then(data=>{
                this.equipement = data["result"];
                console.log(data);
            });
        });
    }

    sendRequest(){
        console.log(this.equipement);
        this._api.editEquipment(this.equipement,this.id).then(data=>{
            this.router.navigate(["equipments"]);
        });

    }
}