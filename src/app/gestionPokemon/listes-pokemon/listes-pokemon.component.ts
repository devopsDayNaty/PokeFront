import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-listes-pokemon',
  templateUrl: './listes-pokemon.component.html',
  styleUrl: './listes-pokemon.component.css'
})
export class ListesPokemonComponent implements OnInit{

  ngOnInit(): void {
    this.getListePokemon();
  }

       constructor(private pokemonService : PokemonService ){}
 

        tableauPokemon : any[]  = []; 


      getListePokemon(){
        this.pokemonService.getAllPokemon().subscribe({
          next : (donnePokemon) => {this.tableauPokemon = donnePokemon},
          error : (erreur) => {console.log(erreur);
          },
          complete : () => {}
        });
      }

      supprimerPokemon(id : number){
        this.pokemonService.deletepokemon(id).subscribe({
          next : () => {},
          error : (erreur) => {console.log(erreur);
          },
          complete : () => {
              this.getListePokemon();
          }
        });
      }


}
