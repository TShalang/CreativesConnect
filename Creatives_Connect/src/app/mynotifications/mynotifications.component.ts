import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from '../shared/notifications.model';
import { NotificationsService } from '../shared/notifications.service';

@Component({
  selector: 'app-mynotifications',
  templateUrl: './mynotifications.component.html',
  styleUrls: ['./mynotifications.component.scss']
})
export class MynotificationsComponent implements OnInit {

  constructor(public service: NotificationsService, private httpService: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getClients()
    .then((res) => (this.service.messageList = res as Notifications[]));
  }

}
