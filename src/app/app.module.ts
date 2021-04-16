import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Modulos de Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Services
import { WebService } from './service/web.service';

//Componentes de la aplicacion
import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { TimeLineComponent } from './component/time-line/time-line.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ResumenComponent } from './component/resumen/resumen.component';
import { SkillsComponent } from './component/resumen/skills/skills.component';
import { CursosComponent } from './component/resumen/cursos/cursos.component';
import { CertificacionesComponent } from './component/resumen/certificaciones/certificaciones.component';
import { ServiciosComponent } from './component/resumen/servicios/servicios.component';
import { ScrollSpyDirective } from './directive/scroll-spy.directive';
import { SkillsCardComponent } from './component/resumen/skills/skills-card/skills-card.component';
import { SkillsBarComponent } from './component/resumen/skills/skills-bar/skills-bar.component';
import { ProyectosComponent } from './component/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SobreMiComponent,
    TimeLineComponent,
    InicioComponent,
    ResumenComponent,
    SkillsComponent,
    CursosComponent,
    CertificacionesComponent,
    ServiciosComponent,
    ScrollSpyDirective,
    SkillsCardComponent,
    SkillsBarComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    WebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
