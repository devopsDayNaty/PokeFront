import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListesPokemonComponent } from './gestionPokemon/listes-pokemon/listes-pokemon.component';
import { DetailPokemonComponent } from './gestionPokemon/detail-pokemon/detail-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { Detail2PokemonComponent } from './gestionPokemon/detail2-pokemon/detail2-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListesPokemonComponent,
    DetailPokemonComponent,
    Detail2PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
