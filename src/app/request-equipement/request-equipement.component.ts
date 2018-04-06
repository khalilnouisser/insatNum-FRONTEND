import { Component, OnInit } from '@angular/core';
import {BackendAPIService} from '../services/backend-api.service';

@Component({
  selector: 'app-request-equipement',
  templateUrl: './request-equipement.component.html',
  styleUrls: ['./request-equipement.component.css']
})
export class RequestEquipementComponent implements OnInit {

  numberRequests = 1;
  requests : RequestEquipement[] = [];

    constructor(private _api : BackendAPIService){}


    ngOnInit() {
      this.requests.push(new RequestEquipement());
  }

    createRange(number){
      if(number != 0){
          while(number>=this.requests.length){
              let newElement = new RequestEquipement();
              newElement.i = this.requests[this.requests.length-1].i+1;
              this.requests.push(newElement);
          }
          while(number<this.requests.length){
              this.requests.pop();
          }
      }
    }

    sendRequest(){
      let jsonToSend = {
          userId : 1,
          equipmentsQuantities : this.requests
      };
      this._api.sendEquipmentRequest(jsonToSend).then(data=>{
          console.log(data);
      });
    }
}

export class RequestEquipement{
  i : number = 1;
  equipment : String = "";
  quantity : number = 1;
}
