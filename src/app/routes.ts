import { Routes, RouterModule, CanActivate } from '@angular/router';

// componentes
import { HomeComponent } from './components/home/home.component';
import { AudiovisualesComponent } from './components/audiovisuales/audiovisuales.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';


export const Rutas: Routes = [
         { path: '', component: HomeComponent },
         { path: 'home', component: HomeComponent },
         { path: 'audiovisuales', component: AudiovisualesComponent },
         { path: 'programacion', component: ProgramacionComponent },
         { path: 'sobre-mi', component: SobreMiComponent },
         { path: 'contacto', component: ContactoComponent },
         {path: '**', component: HomeComponent}
       ];

export const ROUTES = RouterModule.forRoot ( Rutas );
