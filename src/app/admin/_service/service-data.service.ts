import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceDataService {
  appConfig = {
    //"apiUrl":"https://offline.pinnacleseven.com/api/"
    "apiUrl":"http://Localhost:3001/api/"
  }
  constructor(private http: HttpClient) { }
  createFosterCare(user) {
    return this.http.post(this.appConfig.apiUrl + 'fosterCareHomeCreate', user);
  };
  getAllFosterCare(){
    var fosterCareData = {
      "getData":"true"
    }
    return this.http.get(this.appConfig.apiUrl + 'getFosterCareHome');
  };
  getData() {

    return  JSON.parse(localStorage.getItem("fosterCareHomesData"));
  }
  addData(model){
  console.log(model);
   localStorage.setItem("fosterCareHomesData", JSON.stringify(model));
  }
}
