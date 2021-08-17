import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Notifications } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messages: Notifications;
  messageList: Notifications[];


  constructor(private http: HttpClient) { }

  SendMessage(obj: Notifications) {
    return this.http.post(environment.apiURL + '/Notifications', obj);
  }
  getClients() {

    return this.http.get(environment.apiURL + '/Notifications').toPromise();
    }

  
}
