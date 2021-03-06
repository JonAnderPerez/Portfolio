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
  private CV = '/urlCurriculum';
  private DATOS_PERSONALES = '/datos_personales';
  private EXP_LAB = '/experiencia_laboral';
  private ESTUDIOS = '/estudios';
  private SKILLS = '/skills';
  private CURSOS = '/cursos';
  private CERTIFICACIONES = '/certificacion';
  private PROYECTOS = '/proyectos';
  private TESTIMONIOS = '/testimonios';

  private URL_CONTACTO = 'http://localhost:5001/jonanderperez-e8b20/us-central1/sendContactFormSubmittedEmail';

  private datosJSON: Portfolio;

  constructor(private http: HttpClient){}

  public getCV(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.CV + this.JSON);
  }

  public getDatosPersonales(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.DATOS_PERSONALES + this.JSON);
  }

  public getExperienciaLaboral(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.EXP_LAB + this.JSON);
  }

  public getEstudios(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.ESTUDIOS + this.JSON);
  }

  public getSkills(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.SKILLS + this.JSON);
  }

  public getCursos(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.CURSOS + this.JSON);
  }

  public getCertificaciones(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.CERTIFICACIONES + this.JSON);
  }

  public getProyectos(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.PROYECTOS + this.JSON);
  }

  public getTestimonios(): Observable<any> {
    return this.http.get(this.URL + this.PORTFOLIO + this.TESTIMONIOS + this.JSON);
  }

  public postContactForm(form) {
    try {
      this.http.post(this.URL_CONTACTO, form).toPromise();
    } catch (error) {
      console.log(`No se pudo enviar el formulario ${error}`);
    }
  }

}
