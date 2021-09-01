import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['/register']);
  }
  explore(){
    this.router.navigate(['/explorenoid']);
  }
  signin(){
    this.router.navigate(['/login'])
  }

  // signin(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.disableClose = true;
  //   dialogConfig.width="25%";
   
  // this.dialog.open(LoginComponent, dialogConfig);
  // }
}
