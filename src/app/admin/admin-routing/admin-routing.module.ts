import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminComponent } from './../admin.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FosterCareHomesComponentComponent } from '../foster-care-homes-component/foster-care-homes-component.component';
import { FasterCareHomesListComponentComponent } from '../faster-care-homes-list-component/faster-care-homes-list-component.component'


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'fosterCareHomeList',
            pathMatch: 'full'
          },
          // {
          //   path: 'dashboard1',
          //   component: AdminDashboard1Component
          // },
          // {
          //   path: 'dashboard2',
          //   component: AdminDashboard2Component
          // },
          {
            path: 'fosterCareHomeList',
            component: FasterCareHomesListComponentComponent
          },
          {
            path: 'fosterCareHome',
            component: FosterCareHomesComponentComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
