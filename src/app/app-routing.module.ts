import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {PorPaisComponent} from "./pais/pages/por-pais/por-pais.component";
import {PorRegionComponent} from "./pais/pages/por-region/por-region.component";
import {PorCapitalComponent} from "./pais/pages/por-capital/por-capital.component";
import {VerPaisComponent} from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
  {
    path: '',       // path: 'home' , es el path por defecto al abrir la app
    component: PorPaisComponent, // <--- This is the component that will be loaded when the path is empty. tiene que
                                // estar importado en el app.module.ts y exportado en el pais.module.ts
    pathMatch: 'full'           // <--- This is the default value for pathMatch. It means that the path must be exactly empty. If you want to match any path, you can use 'prefix' instead.
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  {
    path: 'pais/:id', // id es un parametro dimámico que se le pasa a la ruta
    component: VerPaisComponent
  },
  {
    path: '**', // <--- Esta ruta es para cuando no se encuentra la ruta que se busca y la devuelve en el compoenente seleccionado o en redirección
    redirectTo: '' // <--- This is the default value for redirectTo. It means that the path will be empty.
  }

]

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
