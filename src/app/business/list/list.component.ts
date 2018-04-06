import { Component, OnInit } from '@angular/core';
import {BackendApiwsService} from '../../services/backend-apiws.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private _api : BackendApiwsService) { }

  public list : Event[] = [];

  ngOnInit() {
    this._api.listEvents(40).then(data =>{
      this.list = data["items"];
    });
  }

}
