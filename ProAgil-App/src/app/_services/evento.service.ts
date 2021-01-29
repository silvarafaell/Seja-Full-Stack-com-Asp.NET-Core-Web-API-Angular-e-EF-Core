import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  baseURL = 'http://localhost:5000/api/evento';

constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    getEvento() {
        return this.http.get(this.baseURL);
    }

}
