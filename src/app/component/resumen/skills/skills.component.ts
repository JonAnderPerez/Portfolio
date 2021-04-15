import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interface/skill';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  primarySkills: Skill[];
  secondarySkills1: Skill[];
  secondarySkills2: Skill[];

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getSkills().subscribe(
      data => {
        let skills: Skill[] = data;
        this.primarySkills = skills.filter(skill => skill.principal === true).sort(skill => skill.porcentaje);
        this.secondarySkills1 = skills.filter(skill => skill.principal === false).sort(skill => skill.porcentaje).slice(0,3);
        this.secondarySkills2 = skills.filter(skill => skill.principal === false).sort(skill => skill.porcentaje).slice(3,6);
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
