import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/interface/skill';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.css']
})
export class SkillsCardComponent implements OnInit {

  @Input() skill: Skill;

  grados: number;

  constructor() { }

  ngOnInit(): void {
    let value = this.skill.porcentaje;
    this.grados = this.percentageToDegrees(value);
  }

  public percentageToDegrees(percentage){
    return percentage / 100 * 180;
  }

}