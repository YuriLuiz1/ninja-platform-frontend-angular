import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesDetalhes } from './animes-detalhes';

describe('RomanceDetalhes', () => {
  let component: AnimesDetalhes;
  let fixture: ComponentFixture<AnimesDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimesDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimesDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
