import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import {RouterModule} from '@angular/router';
import {BusinessRoutes} from './business.routing';
import { AddBusinessComponent } from './add-business/add-business.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BusinessRoutes),
  ],
  declarations: [BusinessComponent, AddBusinessComponent, ListComponent, EditComponent]
})
export class BusinessModule { }
