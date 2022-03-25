import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private ApiUrl: string = 'https://restcountries.com/v3.1/';

  get httpParams(){
    return  new HttpParams ().set('fields', 'name,capital,cca2,flags,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.ApiUrl}/name/ ${ termino }/`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );  
  }
  
  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.ApiUrl}/capital/${ termino }/`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );  
  }

  getPaisPorAlpha( id: string ): Observable<Country> {

    const url = `${ this.ApiUrl}/alpha/${ id }/`;
    return this.http.get<Country>( url );  
  }

  getRegion( region: string): Observable<Country[]> {
    const url = `${ this.ApiUrl}/region/${ region }/`;
    return this.http.get<Country[]>( url ); 
  }

  getRegionFiltro( region: string): Observable<Country[]> {
    const url = `${ this.ApiUrl}/region/${ region }/`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
    .pipe(
      tap( console.log )
    ); 
  }

}
