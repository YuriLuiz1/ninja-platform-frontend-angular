import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSobre } from './pagina-sobre';

describe('PaginaSobre', () => {
  let component: PaginaSobre;
  let fixture: ComponentFixture<PaginaSobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSobre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
