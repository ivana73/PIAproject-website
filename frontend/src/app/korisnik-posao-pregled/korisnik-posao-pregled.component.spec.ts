import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikPosaoPregledComponent } from './korisnik-posao-pregled.component';

describe('KorisnikPosaoPregledComponent', () => {
  let component: KorisnikPosaoPregledComponent;
  let fixture: ComponentFixture<KorisnikPosaoPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikPosaoPregledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorisnikPosaoPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
