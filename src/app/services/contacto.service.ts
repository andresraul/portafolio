import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class ContactoService {

    urlContacto = `${environment.apiUrl}/contacto`;

    constructor(private http: HttpClient) {}


    getAudiovisuales(formulario) {
        return this.http.post(this.urlContacto, formulario);
    }

}