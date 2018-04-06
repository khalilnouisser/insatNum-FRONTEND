import { Routes } from '@angular/router';

import {BusinessComponent} from './business.component';
import {AddBusinessComponent} from './add-business/add-business.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

export const BusinessRoutes: Routes = [
    {

      path: '',
      component: BusinessComponent,
      children: [
          {
              path: 'add',
              component: AddBusinessComponent
          },
          {
              path: 'list',
              component: ListComponent
          },
          {
              path: 'edit',
              component: EditComponent
          }
      ]


}
];
