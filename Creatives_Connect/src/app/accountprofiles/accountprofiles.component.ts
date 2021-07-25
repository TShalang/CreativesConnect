import { Component, OnInit } from '@angular/core';
import { AccountprofileService } from '../shared/accountprofile.service';
import { Uploadline } from '../shared/uploadline.model';
import { Accountprofile } from '../shared/accountprofile.model'; 
import { ProfileVM } from './profile-vm';
import { UploadLineVM } from './upload-line-vm';

@Component({
  selector: 'app-accountprofiles',
  templateUrl: './accountprofiles.component.html',
  styleUrls: ['./accountprofiles.component.scss']
})
export class AccountprofilesComponent implements OnInit {

  profileList: ProfileVM[] = [];

  CurrentProfileList : UploadLineVM[] = [];

  constructor(private service: AccountprofileService) { }
 

  ngOnInit(): void {
    // this.service.getProfileList().then(res => this.profileList = res);
    this.service.getMyProfiles(localStorage["Customer_ID"]).subscribe( (profileList) => {
      this.profileList = profileList;
      
    });
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


}
