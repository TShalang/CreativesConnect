import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../shared/profile.service';
import { Skills } from '../shared/skills.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  skillList: Skills[];

  constructor(public service : ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.service.getSkills().then(res => this.skillList = res as Skills[]);
  }

  profile(id)
  {
    console.log(id);
    localStorage["SkillID"] = id;
    this.router.navigate(['/profile'])

  }


}
