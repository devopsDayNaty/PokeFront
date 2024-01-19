import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PokemonService } from '../../service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail2-pokemon',
  templateUrl: './detail2-pokemon.component.html',
  styleUrl: './detail2-pokemon.component.css'
})
export class Detail2PokemonComponent implements OnInit{
  monFormulaire:FormGroup = new FormGroup({});
  constructor( private pokemonService : PokemonService,
    private router : Router,
    private route : ActivatedRoute
  ){}
  ngOnInit(): void {
    this.monFormulaire = new FormGroup({
      id : new FormControl(0),
      nom : new FormControl(),
      type : new FormControl(),
      ptVie : new FormControl(),
    });

  }

  savePokemon(){
    this.pokemonService.addPokemon(this.monFormulaire.value).subscribe({
      next : (pokemon) => {console.log(pokemon);
      },
      error : () => {},
      complete : () => {
          this.router.navigateByUrl("/list");
      }
    });
  }


}
