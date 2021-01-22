import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventos: any = [
    {
      EventoId: 1,
      Tema: 'Angular',
      Local: 'Fortaleza'
    },
    {
      EventoId: 2,
      Tema: 'NET CORE',
      Local: 'Sao Paulo'
    },
    {
      EventoId: 3,
      Tema: 'Angular e NET CORE',
      Local: 'Fortaleza'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
