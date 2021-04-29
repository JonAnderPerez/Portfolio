import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  url: string;

  constructor(private http: HttpClient, private webService: WebService) { }

  ngOnInit(): void {
    this.webService.getCV().subscribe(
      data => {
        this.url = data;
        console.log('URL: ' + this.url);
      }, err => {
        console.log(JSON.parse(err.error).message);
      }
    );
  }

}
