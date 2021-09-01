import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectsComponent } from '../../projectFolder/projects/projects.component';
import { Notifications } from '../../shared/notifications.model';
import { NotificationsService } from '../../shared/notifications.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mynotifications',
  templateUrl: './mynotifications.component.html',
  styleUrls: ['./mynotifications.component.scss']
})
export class MynotificationsComponent implements OnInit {

  constructor(public service: NotificationsService, private httpService: HttpClient,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.service
    .getClients()
    .then((res) => (this.service.messageList = res as Notifications[]));
  }
  createProject(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="25%";
   
  this.dialog.open(ProjectsComponent, dialogConfig);
  }

  getID(id){
    localStorage.Customer_ID = id;
    console.log(id)
  }
  alertWithSuccess(){  
    Swal.fire('Success...', 'A new project has been created!', 'success').then(function(result){
    window.location.href = "/myprojects"
                 }) ;    
  }
}
