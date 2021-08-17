import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProfileVM } from '../accountprofiles/profile-vm';
import { Customer } from '../customer';
import { Accountprofile } from './accountprofile.model';
import { Uploadline } from './uploadline.model';

@Injectable({
  providedIn: 'root'
})
export class AccountprofileService {
  formData: Accountprofile;
  uploadItems: Uploadline[];

  constructor(private http: HttpClient) { }

  saveOrUpdateProfile(){
    var body ={
      ...this.formData, 
      Upload_Line: this.uploadItems
    };
    console.log(body)
    return this.http.post(environment.apiURL+'/Profiles', body)
  }

  getSkillList(){
    return this.http.get(environment.apiURL+'/Skills').toPromise();
  }
  // getCustomerDetails(){
  //   return this.http.get(environment.apiURL+'/Skills').toPromise();
  // }

  // getProfileList(){
  //   return this.http.get(environment.apiURL +'/Profiles').toPromise();
  //  }

  getMyProfiles(id){
    return this.http.get<ProfileVM[]>("https://localhost:44372/api/Profiles/GetCustomerProfiles/"+id);
  }

  getAllProfiles(id){
    return this.http.get<ProfileVM[]>("https://localhost:44372/api/Profiles/GetAllProfiles/"+id);
  }

  // getCustomerDetails(id){
  //   return this.http.get<Customer[]>("https://localhost:44372/api/Profiles/GetCustomerProfiles/"+id);
  // }

  url = 'https://localhost:44372/api/Profiles';

  upload(file){
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type' : "application/json",
        'Access-Control-Origin': "*"
      })
    }
    return this.http.post<any>(`${this.url}/upload`, {file: file}, httpOptions);
  }

  
}
