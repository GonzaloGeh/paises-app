import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";

import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/country.interface";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais!: Country;

  constructor( private activatedRoute: ActivatedRoute,
               private paisService : PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )),
        tap( console.log )
      )
      .subscribe(pais => this.pais = pais);


// Esta es una forma de hacerlo pero no es la mejor

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( pais => {
    //       console.log(pais);
    //     });
    //   })
  }



}
