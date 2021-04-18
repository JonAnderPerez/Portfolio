import { Component, OnInit } from '@angular/core';
import { WebService } from '../../service/web.service';
import { Proyectos } from '../../interface/proyectos';
import { Proyecto } from '../../interface/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[];
  proyectosCards: Proyecto[];

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getProyectos().subscribe(
      data => {
        this.proyectos = data;
        this.mostrarTodosLosProyectos();
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

  mostrarTodosLosProyectos(){
    this.proyectosCards.pop();
    this.proyectos.forEach(data => {
      data.proyecto.forEach(proyecto => {
        this.proyectosCards.push(proyecto);
      });
    });
  }

  mostrarProyectos(proyecto: Proyectos){
    this.proyectosCards.pop();
    proyecto.proyecto.forEach(proyecto => {
      this.proyectosCards.push(proyecto);
    });
  }

}
