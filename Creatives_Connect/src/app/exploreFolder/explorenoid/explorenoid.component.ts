import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/profile.service';
import { Skills } from 'src/app/shared/skills.model';

@Component({
  selector: 'app-explorenoid',
  templateUrl: './explorenoid.component.html',
  styleUrls: ['./explorenoid.component.scss']
})
export class ExplorenoidComponent implements OnInit {

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
