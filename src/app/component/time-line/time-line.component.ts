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

    /*this.timeline = [
      {
        tiempo: '6 Meses',
        ano: '2017',
        compania: 'Jorge Fernandez Ceramicas',
        puesto: 'Mantenimiento y ayudante de logistica',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
      {
        tiempo: 'Presente',
        ano: '2019',
        compania: 'Deusto Seidor',
        puesto: 'Programador Junior',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
      {
        tiempo: 'Presente',
        ano: '2019',
        compania: 'Deusto Seidor',
        puesto: 'Programador Junior',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
      {
        tiempo: 'Presente',
        ano: '2019',
        compania: 'Deusto Seidor',
        puesto: 'Programador Junior',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
      {
        tiempo: 'Presente',
        ano: '2019',
        compania: 'Deusto Seidor',
        puesto: 'Programador Junior',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
      {
        tiempo: 'Presente',
        ano: '2019',
        compania: 'Deusto Seidor',
        puesto: 'Programador Junior',
        localidad: 'Vitoria-Gasteiz, Alava/Araba'
      },
    ];*/
  }

  showExperienciaLaboral(){
    this.timeline = this.exp_lab;
  }

  showEstudios() {
    this.timeline = this.estudios;
  }

}
