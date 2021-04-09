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

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SobreMiComponent,
    TimeLineComponent,
    InicioComponent,
    ResumenComponent,
    SkillsComponent
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
