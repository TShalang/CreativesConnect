import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RefundComponent } from 'src/app/refund/refund.component';

@Component({
  selector: 'app-myprojectsclient',
  templateUrl: './myprojectsclient.component.html',
  styleUrls: ['./myprojectsclient.component.scss']
})
export class MyprojectsclientComponent implements OnInit {

  userData;
  status =0;
  amount =0;
  MD5string :string = '';

  constructor(private httpService: HttpClient,  private dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService.get('https://localhost:44372/api/Profiles/getMyProjects').subscribe (data => {
      this.userData = data as string [];
      console.log(this.userData)
    });
  }

  details(id){
    localStorage.ProjectID = id;
    console.log(id);
    var CurrentProject = this.userData.find( cp => cp.ProjectID == id );
    this.status = CurrentProject.PaymentStatusID
    console.log(this.status)
this.amount = CurrentProject.Amount;
console.log(this.amount)
  }

  makePayment(){
    this.httpService.get('https://localhost:44372/api/Projects/MakePayment/'+ parseInt(localStorage["ProjectID"]) ).subscribe (res => {
      console.log( 'Status has been changed to Ready for Delivery!' )
  
    });
  }
  createProject(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="25%";
   
  this.dialog.open(RefundComponent, dialogConfig);
  }

}
