import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProgramacionService {

  urlProgramacion = `${environment.apiUrl}/programacion`;

  constructor(private http: HttpClient) { }


getProgramacion() {
  return this.http.get(this.urlProgramacion);
}

}
