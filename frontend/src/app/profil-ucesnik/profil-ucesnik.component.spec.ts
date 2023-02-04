import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilUcesnikComponent } from './profil-ucesnik.component';

describe('ProfilUcesnikComponent', () => {
  let component: ProfilUcesnikComponent;
  let fixture: ComponentFixture<ProfilUcesnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilUcesnikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilUcesnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
