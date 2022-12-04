import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})

export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService : PaisService) { }

  //los metodos se implementan despues del constructor
  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino) //para que un Observable se ejecute, se debe suscribir
      .subscribe( resp => {
        this.paises = resp;
      }
      ,(err) =>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias( termino: string){
    this.hayError = false;

  }









}
