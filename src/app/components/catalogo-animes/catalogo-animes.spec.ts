import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAnimes } from './catalogo-animes';

describe('CatalogoAnimes', () => {
  let component: CatalogoAnimes;
  let fixture: ComponentFixture<CatalogoAnimes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoAnimes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoAnimes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
