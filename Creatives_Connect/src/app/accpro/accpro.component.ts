import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProfileVM } from '../accountprofiles/profile-vm';
import { UploadLineVM } from '../accountprofiles/upload-line-vm';
import { UploadlineComponent } from '../accountprofiles/uploadline/uploadline.component';
import { Customer } from '../customer';
import { AccountprofileService } from '../shared/accountprofile.service';
import { Skills } from '../shared/skills.model';

@Component({
  selector: 'app-accpro',
  templateUrl: './accpro.component.html',
  styleUrls: ['./accpro.component.scss']
})
export class AccproComponent implements OnInit {

  skillList: Skills[];
  profileList: ProfileVM[] = [];
  userDetails: Customer[];

  CurrentProfileList : UploadLineVM[] = [];
  

  constructor(public service: AccountprofileService, private dialog: MatDialog, private httpService: HttpClient, private router: Router) { }
  info

  ngOnInit(): void {
    
    this.resetForm();
    this.service.getSkillList().then(res => this.skillList = res as Skills[]);

    this.service.getMyProfiles(localStorage["Customer_ID"]).subscribe( (profileList) => {
      this.profileList = profileList;
      
    });
    this.httpService.get('https://localhost:44372/api/Profiles/getInfo/' +  parseInt(localStorage['Customer_ID'])  ).subscribe (data => {
      this.info = data as string [];
      console.log(this.info)
    });
  }
  
  

  resetForm(form?:NgForm){
    if(form = null)
    form.reset();
    this.service.formData ={
      ProfileID : null,
      Customer_ID : localStorage["Customer_ID"],
      SkillID : 0,
      Bio : '',
      ProfilePic: ''
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
      // form.form.addControl( 'ProfilePic' , new FormControl('') );
      // form.controls['ProfilePic'].setValue(this.formData.ProfilePic);
    
    
      this.resetForm();
    })
  }

  requestprofiledetails(id) {

    localStorage["ProfileID"] = id;

    this.CurrentProfileList = this.profileList.find( pl => pl.ProfileID == id).UploadLineVMs;
    console.log(this.CurrentProfileList)
    console.log(id)
    this.router.navigate(['/accountprofiles'])
    

    // this.httpService.get('https://localhost:44369/api/Design/GetDesignID/'+id).subscribe (res => {
    //   this.designline = res as string [];
    // });
    
  }
}
