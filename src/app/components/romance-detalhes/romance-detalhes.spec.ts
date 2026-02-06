import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceDetalhes } from './romance-detalhes';

describe('RomanceDetalhes', () => {
  let component: RomanceDetalhes;
  let fixture: ComponentFixture<RomanceDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanceDetalhes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanceDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
