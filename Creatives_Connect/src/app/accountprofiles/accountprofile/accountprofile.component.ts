import { BLACK_ON_WHITE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Customer } from 'src/app/customer';
import { Accountprofile } from 'src/app/shared/accountprofile.model';
import { AccountprofileService } from 'src/app/shared/accountprofile.service';
import { Skills } from 'src/app/shared/skills.model';
import { ProfileVM } from '../profile-vm';
import { UploadLineVM } from '../upload-line-vm';
import { UploadlineComponent } from '../uploadline/uploadline.component';

import { Location } from '@angular/common';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accountprofile',
  templateUrl: './accountprofile.component.html',
  styleUrls: ['./accountprofile.component.scss']
})
export class AccountprofileComponent implements OnInit {
  skillList: Skills[];
  profileList: ProfileVM[] = [];
  userDetails: Customer[];

  CurrentProfileList : UploadLineVM[] = [];
  

  constructor(private location: Location, public service: AccountprofileService, private dialog: MatDialog, private httpService: HttpClient, private router: Router) { }
  userData

  ngOnInit(): void {
    
    this.resetForm();
    this.service.getSkillList().then(res => this.skillList = res as Skills[]);

    this.service.getMyProfiles(localStorage["Customer_ID"]).subscribe( (profileList) => {
      this.profileList = profileList;
      
    });
    
    this.httpService.get('https://localhost:44372/api/Profiles/getInfo/' +  parseInt(localStorage['Customer_ID'])  ).subscribe (data => {
      this.userData = data as string [];
      console.log(this.userData)
    });
  
  }

  alertWithSuccess(){  
    Swal.fire('Success...', 'Your portfolio has been created!', 'success').then(function(result){
    window.location.href = "/accpro"
                 }) ;    
  }



  resetForm(form?:NgForm){
    if(form = null)
    form.reset();
    this.service.formData ={
      ProfileID : null,
      Customer_ID : localStorage["Customer_ID"],
      SkillID : 0,
      Bio : '',
      ProfilePic: '',
      Username: '',
      Deposit: 0,
      Pricing: ''
    };
    this.service.uploadItems= [];
  }

  AddorEditItem(uploadItemIndex, ProfileID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="18%";
    dialogConfig.data = {uploadItemIndex, ProfileID};
    
    this.dialog.open(UploadlineComponent, dialogConfig)


  }

  onSubmit(form:NgForm){
    this.service.saveOrUpdateProfile().subscribe(res => {
      // form.form.addControl( 'ProfilePic' , new FormControl('') );
      // form.controls['ProfilePic'].setValue(this.formData.ProfilePic);
    
    this.alertWithSuccess();
      this.resetForm();
    })
  }

  requestprofiledetails(id) {

    localStorage["ProfileID"] = id;

    this.CurrentProfileList = this.profileList.find( pl => pl.ProfileID == id).UploadLineVMs;
    console.log(this.CurrentProfileList)
    console.log(id)
    

    // this.httpService.get('https://localhost:44369/api/Design/GetDesignID/'+id).subscribe (res => {
    //   this.designline = res as string [];
    // });
  }

  upload(){
    this.service.upload(this.object.url).subscribe(x=>{
      console.log(x);
    })

  }


  public object: any = {};

  file(i){
    if(i.files && i.files[0]){
      var r = new FileReader();
      r.onload = (e : any) => {
        console.log(e.target.result)
        this.service.formData.ProfilePic = e.target.result;
        this.object.url = e.target.result;
      }
      r.readAsDataURL(i.files[0]);
    }

  }

}
