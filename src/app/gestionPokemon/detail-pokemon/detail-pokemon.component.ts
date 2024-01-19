import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrl: './detail-pokemon.component.css'
})
export class DetailPokemonComponent implements OnInit {
  ngOnInit(): void {
    this.obtenirPokemonParId(this.route.snapshot.params['id'])

  }




constructor( private pokemonService : PokemonService,
              private router : Router,
              private route : ActivatedRoute
            ){}

  public pokemon : any ={
    id : 0,
    nom : '',
    type : '',
    ptVie : 0
  }

  obtenirPokemonParId(id : number){
    this.pokemonService.getPokemonById(id).subscribe({
      next : (pokemonData) => {
        this.pokemon.id = pokemonData.id;
        this.pokemon.nom = pokemonData.nom;
        this.pokemon.type = pokemonData.type;
        this.pokemon.ptVie = pokemonData.ptVie;
      },
      error : () => {},
      complete : () => {}
    });
  }

  savePokemon(){
    this.pokemonService.addPokemon(this.pokemon).subscribe({
      next : (pokemon) => {console.log(pokemon);
      },
      error : () => {},
      complete : () => {
          this.router.navigateByUrl("/list");
      }
    });
  }

}
