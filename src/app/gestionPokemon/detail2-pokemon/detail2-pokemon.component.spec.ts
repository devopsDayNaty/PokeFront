import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2PokemonComponent } from './detail2-pokemon.component';

describe('Detail2PokemonComponent', () => {
  let component: Detail2PokemonComponent;
  let fixture: ComponentFixture<Detail2PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Detail2PokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Detail2PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
