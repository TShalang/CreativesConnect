import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from '../../shared/notifications.model';
import { NotificationsService } from '../../shared/notifications.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  formData: Notifications;

  // userObj = new User;

  constructor(public service: NotificationsService, private httpService: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    
    this.service.messages = {
      NotificationID: 0,
      Customer_ID: localStorage['Customer_ID'],
      ProfileID: localStorage['ProfileID'],
      Contact_No: '',
      Email_Address: '',
      Message: '',
      Date: new Date()
    }
    this.service.messageList = [];
  }

  onSubmit(){     
   
    this.service.SendMessage(this.service.messages).subscribe(res => {
      this.alertWithSuccess();
      console.log(res); 

})
}
alertWithSuccess(){  
  Swal.fire('Success...', 'You have a new connection!', 'success').then(function(result){
 
               }) ;    
}
}
