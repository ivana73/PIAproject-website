import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikPosaoDodavanjeComponent } from './korisnik-posao-dodavanje.component';

describe('KorisnikPosaoDodavanjeComponent', () => {
  let component: KorisnikPosaoDodavanjeComponent;
  let fixture: ComponentFixture<KorisnikPosaoDodavanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikPosaoDodavanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorisnikPosaoDodavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
