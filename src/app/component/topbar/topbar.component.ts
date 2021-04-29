import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isCollapsed: boolean;
  menuItem: any;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = false;

    this.menuItem = [
      {url: '#inicio', name: 'Inicio'},
      {url: '#sobre-mi', name: 'Sobre mi'},
      {url: '#resumen', name: 'Resumen'},
      {url: '#proyectos', name: 'Proyectos'},
      {url: '#contacto', name: 'Contacto'}
    ];
  }

}
