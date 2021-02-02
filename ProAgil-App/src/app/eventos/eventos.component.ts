import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../_models/Evento';
import { EventoService } from '../_services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  eventosFiltrados!: Evento[];
  eventos!: Evento[];
  imagemLargura = 50;
  imagemMargem = 2;
  mostrarImagem = false;
  modalRef!: BsModalRef;
  registerForm!: FormGroup;

  // tslint:disable-next-line:variable-name
  _filtroLista = '';

  constructor(
      private eventoService: EventoService
    , private modalService: BsModalService
    ) { }

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }


  openModal(template: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.validation();
    this.getEventos();
  }

  filtrarEventos(filtrarPor: string): Evento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (      evento: { tema: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  alternarImagem(): void {
    this.mostrarImagem = !this.mostrarImagem;
  }

  validation(): void {
    this.registerForm = new FormGroup({
      tema: new FormControl('',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      local: new FormControl('', Validators.required),
      dataEvento: new FormControl('', Validators.required),
      imagemURL: new FormControl('', Validators.required),
      qtdPessoas: new FormControl('',
      [Validators.required, Validators.maxLength(120000)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('',
      [Validators.required, Validators.email])
    });

  }

  salvarAlteracao(): void {

  }

  getEventos(): void {
    this.eventoService.getAllEvento().subscribe(
     // tslint:disable-next-line:variable-name
     (_eventos: Evento[]) => {
      this.eventos = _eventos;
      this.eventosFiltrados = this.eventos;
    }, error => {
      console.log(error);
     });
  }
}
