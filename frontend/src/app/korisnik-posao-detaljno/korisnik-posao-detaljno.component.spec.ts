import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikPosaoDetaljnoComponent } from './korisnik-posao-detaljno.component';

describe('KorisnikPosaoDetaljnoComponent', () => {
  let component: KorisnikPosaoDetaljnoComponent;
  let fixture: ComponentFixture<KorisnikPosaoDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorisnikPosaoDetaljnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorisnikPosaoDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
