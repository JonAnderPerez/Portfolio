import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Portfolio } from '../interface/portfolio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  private URL = 'https://jonanderperez-e8b20-default-rtdb.europe-west1.firebasedatabase.app';
  private JSON = '.json';
  private PORTFOLIO = '/portfolio';
  private EXP_LAB = '/experiencia_laboral';
  private ESTUDIOS = '/estudios';

  private datosJSON: Portfolio;

  constructor(private http: HttpClient){}

  public getExperienciaLaboral(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.EXP_LAB + this.JSON);
  }

  public getEstudios(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.ESTUDIOS + this.JSON);
  }

}
