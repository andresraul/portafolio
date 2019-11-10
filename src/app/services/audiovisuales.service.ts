import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AudiovisualesService {

  urlAudiovisual = `${environment.apiUrl}/audiovisual`;

  constructor(private http: HttpClient) { }


getAudiovisuales() {
  return this.http.get(this.urlAudiovisual);
}

}
