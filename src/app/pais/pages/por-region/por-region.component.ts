import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
  button {
    margin-right: 5px;
  }`
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[]= [];

  
  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary'
  }

  constructor( private paisService: PaisService) { }
 
  activarRegion( region: string ) {
    this.regionActiva = region;
    
    this.paisService.getRegionFiltro( region )
      .subscribe( ( paises ) => { this.paises = paises; });

  }
}
