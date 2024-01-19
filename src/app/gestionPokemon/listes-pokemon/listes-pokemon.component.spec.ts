import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesPokemonComponent } from './listes-pokemon.component';

describe('ListesPokemonComponent', () => {
  let component: ListesPokemonComponent;
  let fixture: ComponentFixture<ListesPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListesPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListesPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
