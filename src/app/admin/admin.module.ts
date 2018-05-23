import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { FosterCareHomesComponentComponent } from './foster-care-homes-component/foster-care-homes-component.component';
import { FormGroup,FormsModule, FormControl, Validators, FormBuilder, NgForm }
  from '@angular/forms';
import { FasterCareHomesListComponentComponent } from './faster-care-homes-list-component/faster-care-homes-list-component.component'
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import{ServiceDataService} from './_service/service-data.service'
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    FosterCareHomesComponentComponent,
    FasterCareHomesListComponentComponent
  ],
  exports: [AdminComponent],
  providers:[ServiceDataService]
})
export class AdminModule { }
