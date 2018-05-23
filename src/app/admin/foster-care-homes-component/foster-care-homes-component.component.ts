import { Component, OnInit } from '@angular/core';
import{FosterCareHomes} from './foster-care-homes';
import { Router } from '@angular/router';
import { FormGroup,FormsModule, FormControl, Validators, FormBuilder, NgForm }
  from '@angular/forms';
  import{ServiceDataService} from '../_service/service-data.service';
@Component({
  selector: 'app-foster-care-homes-component',
  templateUrl: './foster-care-homes-component.component.html',
  styleUrls: ['./foster-care-homes-component.component.css']
})
export class FosterCareHomesComponentComponent implements OnInit {
  public fosterCareHomes :any= FosterCareHomes;
  fosterCare_local_storage = [];
  constructor(private serviceDataService:ServiceDataService,private router:Router) { }

  ngOnInit() {
    this.fosterCareHomes = new FosterCareHomes();
    
  }
  onSubmit(){
    if (navigator.onLine) {
      this.serviceDataService.createFosterCare(this.fosterCareHomes).subscribe(
        data => {
          this.fosterCareHomes= {};
          this.router.navigateByUrl('/admin/fosterCareHomeList');
        },
        error => {
         console.log(error);
        });
    }else{
      if (this.serviceDataService.getData() == null) {
        this.fosterCare_local_storage = [];
      } else {
        this.fosterCare_local_storage = this.serviceDataService.getData();
      }
      this.fosterCare_local_storage.push(this.fosterCareHomes);
      this.serviceDataService.addData(this.fosterCare_local_storage);
      this.router.navigateByUrl('/admin/fosterCareHomeList');
    }
  }
}
