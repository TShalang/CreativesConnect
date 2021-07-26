import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfileVM } from '../accountprofiles/profile-vm';
import { UploadLineVM } from '../accountprofiles/upload-line-vm';
import { AccountprofileService } from '../shared/accountprofile.service';
import { ProfileService } from '../shared/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileSkill: any;

  
  profileList: ProfileVM[] = [];

  CurrentProfileList : UploadLineVM[] = [];

  constructor(private service: AccountprofileService, private toastr: ToastrService) { }

  

  ngOnInit(): void {
   // this.service.getProfileList().then(res => this.profileList = res);
   this.service.getAllProfiles(localStorage["SkillID"]).subscribe( (profileList) => {
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

success(){
  this.toastr.success('Message sent','Success!');
}
}
