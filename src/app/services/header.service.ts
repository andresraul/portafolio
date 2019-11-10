import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderModel } from '../models/header.model';




@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  urlHeaders = 'assets/data/header.data.json';

  constructor(private http: HttpClient) { }

  getHeaders(): Observable<HeaderModel[]> {
    return this.http.get<HeaderModel[]>(this.urlHeaders);
  }

  getHeader(slug: string) {
return this.getHeaders().pipe(map(
  headers => headers.find(header => header.slug === slug))
  );
  }
}
