import { Component, OnInit } from '@angular/core';
import { Certificacion } from 'src/app/interface/certificacion';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Certificacion;

  constructor(private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getCursos().subscribe(
      data => {
        this.cursos = data;
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
