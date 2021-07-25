import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../profile/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  formData: Profile;

  constructor(private http: HttpClient) { }

  getProfile(id){
    return this.http.get<any>("https://localhost:44372/api/Profiles/getProfile/"+id).pipe(map(result=>result));;
  }

  getSkills(){
    return this.http.get(environment.apiURL +'/Skills').toPromise();
   }
}
