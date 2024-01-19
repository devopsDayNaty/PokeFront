import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private _url : string = 'http://localhost:8080/pokemonapi';
                         

  constructor(private http : HttpClient) { }

  getAllPokemon() : Observable<any[]>{
    return this.http.get<any[]>(this._url);
  }

  addPokemon(pokemon : any) : Observable<any>{
    return this.http.post<any>(this._url,pokemon);
  }

  updatePokemon(pokemon : any) : Observable<any>{
    return this.http.put<any>(this._url,pokemon);
  }

  deletepokemon(id : number): Observable<any>{
    return this.http.delete(this._url+"/"+id);
  }

  getPokemonById(id : number): Observable<any>{
    return this.http.get<any>(this._url+"/"+id)
  }
}
