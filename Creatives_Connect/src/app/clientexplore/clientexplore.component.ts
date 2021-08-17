import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Skills } from '../shared/skills.model';

@Component({
  selector: 'app-clientexplore',
  templateUrl: './clientexplore.component.html',
  styleUrls: ['./clientexplore.component.scss']
})
export class ClientexploreComponent implements OnInit {

  skillList: Skills[];

  constructor(public service : ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSkills().then(res => this.skillList = res as Skills[]);
  }

  profile(id)
  {
    console.log(id);
    localStorage["SkillID"] = id;
    this.router.navigate(['/clientprofile'])

  }
}
