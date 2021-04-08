import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  datosPersonales: any;

  constructor() { }

  ngOnInit(): void {
    this.datosPersonales = {
      urlImg: '',
      nombre: 'Jon Ander Pérez',
      categoria: 'Desarrollador Junior de Software',
      descripcion: 'Soy un chico recientemente iniciado en el mundo laboral con ganas de trabajar y aprender nuevas tecnologias.',
      datos: [
        {
          icon: 'fas fa-calendar-alt',
          dato: '20/02/1998'
        },
        {
          icon: 'fas fa-home',
          dato: 'España / Vitoria-Gasteiz'
        },
        {
          icon: 'fas fa-envelope',
          dato: 'Jonan.trabajo@gmail.com'
        },
        {
          icon: 'fas fa-mobile-alt',
          dato: '696810893'
        }
      ],
      redSoc: [
        {
          url: 'https://www.linkedin.com/in/jon-ander-perez-garcia-02a715175/',
          icon: 'fab fa-linkedin-in',
          nombre: 'Linkedin'
        },
        {
          url: 'https://github.com/JonAnderPerez',
          icon: 'fab fa-github',
          nombre: 'GitHub'
        },
        {
          url: 'https://www.instagram.com/JonanPG/',
          icon: 'fab fa-instagram',
          nombre: 'Instagram'
        },
      ]
    };
  }

}
