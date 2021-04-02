import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  timeline: any;

  constructor() { }

  ngOnInit(): void {
    this.timeline = [
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
    ];
  }

}
