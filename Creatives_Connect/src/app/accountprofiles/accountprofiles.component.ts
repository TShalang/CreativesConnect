import { Component, OnInit } from '@angular/core';
import { AccountprofileService } from '../shared/accountprofile.service';
import { Uploadline } from '../shared/uploadline.model';
import { Accountprofile } from '../shared/accountprofile.model'; 
import { ProfileVM } from './profile-vm';
import { UploadLineVM } from './upload-line-vm';
import { Customer } from '../customer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accountprofiles',
  templateUrl: './accountprofiles.component.html',
  styleUrls: ['./accountprofiles.component.scss']
})
export class AccountprofilesComponent implements OnInit {

  profileList: ProfileVM[] = [];
  userDetails: Customer[];

  CurrentProfileList : UploadLineVM[] = [];

  constructor(public service: AccountprofileService, private httpService: HttpClient) { }
  userData
  info
 

  ngOnInit(): void {
    // this.service.getProfileList().then(res => this.profileList = res);
    this.service.getMyProfiles(localStorage["Customer_ID"]).subscribe( (profileList) => {
      this.profileList = profileList;
      
    });
    this.httpService.get('https://localhost:44372/api/Profiles/getInfo/' +  parseInt(localStorage['Customer_ID'])  ).subscribe (data => {
      this.userData = data as string [];
      console.log(this.userData)
    });
    // this.httpService.get('https://localhost:44372/api/Profiles/getAllInfo/' +  parseInt(localStorage["ProfileID"])  ).subscribe (data => {
    //   this.info = data as string [];
    //   console.log(this.info)
    // });
    // this.requestprofiledetails(localStorage["ProfileID"]);
  }

  requestprofiledetails(id) {

    localStorage["ProfileID"] = id;

    this.CurrentProfileList = this.profileList.find( pl => pl.ProfileID == id).UploadLineVMs;
    console.log(this.CurrentProfileList)
    console.log(id)
    

    // this.httpService.get('https://localhost:44369/api/Design/GetDesignID/'+id).subscribe (res => {
    //   this.designline = res as string [];
    // });
    // this.httpService.get('https://localhost:44372/api/Profiles/getAllInfo/'+id).subscribe (res => {
    //   this.info = res as string [];
    // });
  }


}
