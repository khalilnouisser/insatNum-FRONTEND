import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {EquipmentsComponent} from './equipments/equipments.component';
import {HistoryComponent} from './history/history.component';
import {RequestEquipementComponent} from './request-equipement/request-equipement.component';
import {ListRequestsComponent} from './list-requests/list-requests.component';
import {ShiftingRequestComponent} from './shifting-request/shifting-request.component';
import {ReceptionEquipmentsComponent} from './reception-equipments/reception-equipments.component';
import {EquipmentAddComponent} from './equipment-add/equipment-add.component';
import {EquipmentEditComponent} from './equipment-edit/equipment-edit.component';
import {UsersListComponent} from './users-list/users-list.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },{
          path: 'equipments',
          component: EquipmentsComponent,
    },{
          path: 'equipments/:keyword',
          component: EquipmentsComponent,
    },{
          path: 'users',
          component: UsersListComponent,
    },{
          path: 'users/:keyword',
          component: UsersListComponent,
    },{
          path: 'history/:id',
          component: HistoryComponent,
    }
    ,{
          path: 'history',
          component: HistoryComponent,
    },{
          path: 'equipment/add',
          component: EquipmentAddComponent,
    },{
          path: 'equipment/edit/:id',
          component: EquipmentEditComponent,
    },{
          path: 'request',
          component: RequestEquipementComponent,
    },{
          path: 'requests',
          component: ListRequestsComponent,
    }
    ,{
          path: 'receptions/:id',
          component: ReceptionEquipmentsComponent,
    },{
          path: 'shifting/:id',
          component: ShiftingRequestComponent,
    },{
    path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },{
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    },{
      path: 'event',
      loadChildren: './business/business.module#BusinessModule'
  }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
