import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProfileVM } from '../accountprofiles/profile-vm';
import { UploadLineVM } from '../accountprofiles/upload-line-vm';
import { NotificationsComponent } from '../notifications/notifications.component';
import { AccountprofileService } from '../shared/accountprofile.service';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.scss']
})
export class ClientprofileComponent implements OnInit {

  profileSkill: any;

  
  profileList: ProfileVM[] = [];

  CurrentProfileList : UploadLineVM[] = [];




  title = 'profile';
  dPicture: string = "assets/images/Mooncake.png";
  myWork:string ="assets/images/smoke.jpg";
  myWork2:string ="assets/images/pancakes.jpg"
  myWork3:string ="assets/images/art.jpg"

  constructor(private service: AccountprofileService, private toastr: ToastrService, private httpService: HttpClient,  private dialog:MatDialog) { }
  info

  

  ngOnInit(): void {
   // this.service.getProfileList().then(res => this.profileList = res);
   this.service.getAllProfiles(localStorage["SkillID"]).subscribe( (profileList) => {
    this.profileList = profileList;
    
  });
  this.httpService.get('https://localhost:44372/api/Profiles/getAllInfo/' +  parseInt(localStorage["ProfileID"])  ).subscribe (data => {
    this.info = data as string [];
    console.log(this.info)
  });
 

 
}


requestprofiledetails(id) {


  localStorage["ProfileID"] = id;

  this.CurrentProfileList = this.profileList.find( pl => pl.ProfileID == id).UploadLineVMs;
  console.log(this.CurrentProfileList)
  console.log(id)
  
 
  // this.httpService.get('https://localhost:44372/api/Profiles/GetCustomerProfiles/'+id).subscribe (res => {
  //   this.info = res as string [];
  // });
  this.httpService.get('https://localhost:44372/api/Profiles/getAllInfo/'+id).subscribe (res => {
    this.info = res as string [];
  });

}



connect(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width="25%";
 
this.dialog.open(NotificationsComponent, dialogConfig);
}
}
