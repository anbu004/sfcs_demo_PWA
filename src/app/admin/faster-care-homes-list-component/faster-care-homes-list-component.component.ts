import { Component, OnInit } from '@angular/core';
import{ServiceDataService} from '../_service/service-data.service'

@Component({
  selector: 'app-faster-care-homes-list-component',
  templateUrl: './faster-care-homes-list-component.component.html',
  styleUrls: ['./faster-care-homes-list-component.component.css'],
})
export class FasterCareHomesListComponentComponent implements OnInit {

  constructor(private serviceDataService:ServiceDataService) { }
  getAllFasterList:any = [];
  fosterCareHomesDatas:any = [];
  fasterHomeData:any={};
  ngOnInit() {
    this.getAllFasterCareHomesList();
    this.gussNetworkStatus();
  }
 
getAllFasterCareHomesList(){
  this.serviceDataService.getAllFosterCare().subscribe(
    data => {
      this.getAllFasterList = data;
     console.log(">>>",data);
    },
    error => {
     
    });
//   if (navigator.onLine) {
// this.serviceDataService.getAllFosterCare().subscribe(
//     data => {
//       this.getAllFasterList = data;
//      console.log(">>>",data);
//     },
//     error => {
     
//     });
//   }else{
//     this.getAllFasterList = this.serviceDataService.getData();
//   }
  
}
gussNetworkStatus() {
  if (navigator.onLine) {
    if (this.serviceDataService.getData()) {
      this.serviceDataService.getData().forEach((keys: any, vals: any) => {
        this.serviceDataService.createFosterCare(keys).subscribe(
          data => {
           this.getAllFasterCareHomesList();
          },
          error => {
           console.log(error);
          });
      });
      localStorage.removeItem("fosterCareHomesData");
    }
  }
}


}
