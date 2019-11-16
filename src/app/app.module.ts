import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Componentes
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AudiovisualesComponent } from './components/audiovisuales/audiovisuales.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/common/footer/footer.component';

// Rutas
import { ROUTES } from './routes';
import { HeaderComponent } from './components/common/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { VideoVimeoPipe } from './pipes/video-vimeo.pipe';
import { ProyectoComponent } from './components/proyecto/proyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SobreMiComponent,
    AudiovisualesComponent,
    ProgramacionComponent,
    ContactoComponent,
    HeaderComponent,
    VideoVimeoPipe,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    ROUTES,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
