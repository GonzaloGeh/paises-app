import { Component } from '@angular/core';
import {Country} from "../../interfaces/country.interface";
import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  // placeholder: string = 'Buscar por capital...';


  constructor( private paisService : PaisService ) { }


  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino) //para que un Observable se ejecute, se debe suscribir
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
