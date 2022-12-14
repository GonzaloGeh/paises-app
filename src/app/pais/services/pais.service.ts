import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country.interface";

@Injectable({
  providedIn: 'root'
})

export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${termino}`;
    return this.http.get<Country[]>( url );
      // .pipe(
      //   catchError( err => of ([])) //of es un observable que retorna un arreglo vacio o lo que yo quiera dentro de ese arreglo
      // );

  }

  buscarCapital( termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha( id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>(url);
  }
}
