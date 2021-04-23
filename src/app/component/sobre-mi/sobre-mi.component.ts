import { Component, OnInit } from '@angular/core';
import { WebService } from '../../service/web.service';
import { DatosPersonales } from '../../interface/datos-personales';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  datosPersonales: DatosPersonales;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getDatosPersonales().subscribe(
      data => {
        this.datosPersonales = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
