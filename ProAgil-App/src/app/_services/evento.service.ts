import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../_models/Evento';

@Injectable()
export class EventoService {
  baseURL = 'http://localhost:5000/api/evento';

constructor(private http: HttpClient) { }

    // tslint:disable-next-line: typedef
    getAllEvento(): Observable<Evento[]>{
        return this.http.get<Evento[]>(this.baseURL);
    }

    // tslint:disable-next-line: typedef
    getEventoByTema(tema: string): Observable<Evento[]>{
        return this.http.get<Evento[]>(`${this.baseURL}/getByTema/${tema}`);
    }

    // tslint:disable-next-line: typedef
    getEventoById(id: number): Observable<Evento[]>{
      return this.http.get<Evento[]>(`${this.baseURL}/${id}`);
    }

    // tslint:disable-next-line: typedef
    postEvento(evento: Evento) {
      return this.http.post<Evento>(this.baseURL, evento);
    }

}
