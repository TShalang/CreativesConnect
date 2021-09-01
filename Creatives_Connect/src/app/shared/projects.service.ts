import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Claimpayment } from './claimpayment';
import { Projects } from './projects.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Projects;
  projectList: Projects[]
  paymentClaims: Claimpayment;
  paymentClaimList: Claimpayment[];

  constructor(private http: HttpClient) { }

  createProject(obj: Projects) {
    return this.http.post(environment.apiURL + '/Projects', obj);
  }
  
  claimPayment(obj: Claimpayment) {
    return this.http.post(environment.apiURL + '/BankDetails', obj);
  }
}
