import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from '../../shared/notifications.model';
import { Projects } from '../../shared/projects.model';
import { ProjectsService } from '../../shared/projects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  formData: Projects;

  constructor(public service: ProjectsService, private httpService: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    
    this.service.projects = {
      ProjectID: 0,
      ProfileID: localStorage.ProfileID,
      Description: '',
      Amount: 0,
      PaymentStatusID: 1,
      Deposit: 0,
      StartDate: new Date(),
      EndDate: new Date(),
      Customer_ID: localStorage.Customer_ID
    }
    this.service.projectList = [];
  }

  onSubmit(){     
   
    this.service.createProject(this.service.projects).subscribe(res => {
      this.alertWithSuccess();
      console.log(res); 

})
}
alertWithSuccess(){  
  Swal.fire('Success...', 'A new project has been created!', 'success').then(function(result){
  window.location.href = "/myprojects"
               }) ;    
}

}
