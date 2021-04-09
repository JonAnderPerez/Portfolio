import { Component, OnInit } from '@angular/core';
import { WebService } from '../../service/web.service';
import { TimeLine } from '../../interface/time-line';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  timeline: TimeLine;
  experiencia: boolean = true;
  private exp_lab: TimeLine;
  private estudios: TimeLine;

  constructor(private webService: WebService) {}

  ngOnInit() {

    this.webService.getExperienciaLaboral().subscribe(
      data => {
        this.timeline = data;
        this.exp_lab = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );

    this.webService.getEstudios().subscribe(
      data => {
        this.estudios = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

  showExperienciaLaboral(){
    this.timeline = this.exp_lab;
    this.experiencia = true;
  }

  showEstudios() {
    this.timeline = this.estudios;
    this.experiencia = false;
  }

}
