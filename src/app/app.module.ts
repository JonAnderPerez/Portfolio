import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Modulos de Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Componentes de la aplicacion
import { AppComponent } from './app.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { SobreMiComponent } from './component/sobre-mi/sobre-mi.component';
import { TimeLineComponent } from './component/time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SobreMiComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
