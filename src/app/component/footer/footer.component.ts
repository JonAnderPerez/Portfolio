import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interface/datos-personales';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  datosPersonales: DatosPersonales;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getDatosPersonales().subscribe(
      data => {
        this.datosPersonales = data;
        this.datosPersonales.datos.splice(0,1); //Borramos la fecha de nacimiento
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
