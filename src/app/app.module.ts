import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { EquipmentsComponent } from './equipments/equipments.component';
import {BackendAPIService} from './services/backend-api.service';
import { HttpClientModule } from '@angular/common/http';
import {GenericHttp} from './services/generic-http.service';
import { HistoryComponent } from './history/history.component';
import { RequestEquipementComponent } from './request-equipement/request-equipement.component';
import { ListRequestsComponent } from './list-requests/list-requests.component';
import { ShiftingRequestComponent } from './shifting-request/shifting-request.component';
import { ReceptionEquipmentsComponent } from './reception-equipments/reception-equipments.component';
import { EquipmentAddComponent } from './equipment-add/equipment-add.component';
import { EquipmentEditComponent } from './equipment-edit/equipment-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import {BusinessModule} from './business/business.module';
import {BackendApiwsService} from './services/backend-apiws.service';
@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        BusinessModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        EquipmentsComponent,
        HistoryComponent,
        RequestEquipementComponent,
        ListRequestsComponent,
        ShiftingRequestComponent,
        ReceptionEquipmentsComponent,
        EquipmentAddComponent,
        EquipmentEditComponent,
        UsersListComponent
    ],
    bootstrap:    [ AppComponent ],
    providers : [BackendAPIService,GenericHttp,BackendApiwsService]
})
export class AppModule { }
