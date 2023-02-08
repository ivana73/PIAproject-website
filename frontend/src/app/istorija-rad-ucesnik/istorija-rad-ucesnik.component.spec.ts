import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IstorijaRadUcesnikComponent } from './istorija-rad-ucesnik.component';

describe('IstorijaRadUcesnikComponent', () => {
  let component: IstorijaRadUcesnikComponent;
  let fixture: ComponentFixture<IstorijaRadUcesnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IstorijaRadUcesnikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IstorijaRadUcesnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
