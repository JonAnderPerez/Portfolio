import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from 'src/app/interface/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;

  appImg: string;

  constructor() {
    this.appImg = "url('assets/img/app.jpg')";
  }

  ngOnInit(): void {
    if(this.proyecto.imgApp !== ''){
      this.appImg = `url('${this.proyecto.imgApp}')`;
    }
  }

}
