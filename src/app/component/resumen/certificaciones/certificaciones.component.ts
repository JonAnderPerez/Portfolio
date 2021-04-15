import { Component, OnInit } from '@angular/core';
import { Certificacion } from 'src/app/interface/certificacion';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {

  certificaciones: Certificacion;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getCertificaciones().subscribe(
      data => {
        this.certificaciones = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
