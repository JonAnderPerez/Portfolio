import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/interface/skill';

@Component({
  selector: 'app-skills-bar',
  templateUrl: './skills-bar.component.html',
  styleUrls: ['./skills-bar.component.css']
})
export class SkillsBarComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
