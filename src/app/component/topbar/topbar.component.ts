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
      {url: '#', name: 'Inicio'},
      {url: '#', name: 'Sobre mi'},
      {url: '#', name: 'Resumen'},
      {url: '#', name: 'Proyectos'},
      {url: '#', name: 'Contacto'}
    ];
  }

}
