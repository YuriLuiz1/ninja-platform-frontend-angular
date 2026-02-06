import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeRomance } from './anime-romance';

describe('AnimeRomance', () => {
  let component: AnimeRomance;
  let fixture: ComponentFixture<AnimeRomance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeRomance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeRomance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
