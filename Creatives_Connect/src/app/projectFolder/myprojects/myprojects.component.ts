import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClaimpaymentComponent } from 'src/app/claimpayment/claimpayment.component';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.scss']
})
export class MyprojectsComponent implements OnInit {
  userData;
  status =0;
  deposit =0;
  MD5string :string = '';

  constructor(private httpService: HttpClient,  private dialog:MatDialog) { }

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
this.deposit = CurrentProject.deposit;
console.log(this.deposit)
  }

  claim(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="25%";
   
  this.dialog.open(ClaimpaymentComponent, dialogConfig);
  }

}
