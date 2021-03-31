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
          label: 'Nombre: ',
          dato: '20/02/1998'
        },
        {
          label: 'Localidad: ',
          dato: 'España / Vitoria-Gasteiz'
        },
        {
          label: 'Codigo postal: ',
          dato: '01010'
        },
        {
          label: 'Email: ',
          dato: 'Jonan.trabajo@gmail.com'
        },
        {
          label: 'Telefono movil: ',
          dato: '696810893'
        }
      ],
      redSoc: [
        {
          url: '',
          icon: '',
          nombre: 'Linkedin'
        },
        {
          url: '',
          icon: '',
          nombre: 'GitHub'
        },
        {
          url: '',
          icon: '',
          nombre: 'Instagram'
        },
      ]
    };
  }

}
