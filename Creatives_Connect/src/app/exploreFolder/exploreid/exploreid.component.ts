import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileVM } from '../../accountprofiles/profile-vm';
import { UploadLineVM } from '../../accountprofiles/upload-line-vm';
import { AccountprofileService } from '../../shared/accountprofile.service';
import { ProfileService } from '../../shared/profile.service';
import { Skills } from '../../shared/skills.model';

@Component({
  selector: 'app-exploreid',
  templateUrl: './exploreid.component.html',
  styleUrls: ['./exploreid.component.scss']
})
export class ExploreidComponent implements OnInit {

  skillList: Skills[];
  userData;
  profileList: ProfileVM[] = [];

  constructor(public service : ProfileService, public aService: AccountprofileService, private router: Router, private httpService: HttpClient) { }

  ngOnInit(): void {
    this.service.getSkills().then(res => this.skillList = res as Skills[]);
    this.aService.getAllProfiles(localStorage["SkillID"]).subscribe( (profileList) => {
      this.profileList = profileList;
      
    });
    this.httpService.get('https://localhost:44372/api/Profiles').subscribe (data => {
      this.userData = data as string [];
      console.log(this.userData)
    });
  }

  profile(id)
  {
    console.log(id);
    localStorage["ProfileID"] = id;
    
  this.router.navigate(['/profile'])

  }
  skill(id){
    localStorage["SkillID"] = id;
    this.router.navigate(['/exploreid'])
    location.reload();
  }

}
