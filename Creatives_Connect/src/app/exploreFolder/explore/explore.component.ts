import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../shared/profile.service';
import { Skills } from '../../shared/skills.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  skillList: Skills[];
  userData

  constructor(public service : ProfileService, private router: Router, private httpService: HttpClient) { }

  ngOnInit(): void {
    this.service.getSkills().then(res => this.skillList = res as Skills[]);
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
  }


}
