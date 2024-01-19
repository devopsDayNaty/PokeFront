import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesPokemonComponent } from './gestionPokemon/listes-pokemon/listes-pokemon.component';
import { DetailPokemonComponent } from './gestionPokemon/detail-pokemon/detail-pokemon.component';
import { Detail2PokemonComponent } from './gestionPokemon/detail2-pokemon/detail2-pokemon.component';

const routes: Routes = [
  {path:"list",component:ListesPokemonComponent},
  {path:"detail",component:DetailPokemonComponent},
  {path:"detail/:id",component:DetailPokemonComponent},
  {path:"detail2",component:Detail2PokemonComponent},
  {path:"",redirectTo: '/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
