import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AccountprofileService } from 'src/app/shared/accountprofile.service';
import { Skills } from 'src/app/shared/skills.model';
import { UploadlineComponent } from '../uploadline/uploadline.component';

@Component({
  selector: 'app-accountprofile',
  templateUrl: './accountprofile.component.html',
  styleUrls: ['./accountprofile.component.scss']
})
export class AccountprofileComponent implements OnInit {
  skillList: Skills[];

  constructor(public service: AccountprofileService, private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.resetForm();
    this.service.getSkillList().then(res => this.skillList = res as Skills[])
  }
  
  

  resetForm(form?:NgForm){
    if(form = null)
    form.reset();
    this.service.formData ={
      ProfileID : null,
      Customer_ID : localStorage["Customer_ID"],
      SkillID : 0,
      Bio : '',
    };
    this.service.uploadItems= [];
  }

  AddorEditItem(uploadItemIndex, ProfileID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
    dialogConfig.data = {uploadItemIndex, ProfileID};
    this.dialog.open(UploadlineComponent, dialogConfig)


  }

  onSubmit(form:NgForm){
    this.service.saveOrUpdateProfile().subscribe(res => {
      this.resetForm();
    })
  }
}
