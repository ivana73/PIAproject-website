import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijaPosaoDetaljnoComponent } from './agencija-posao-detaljno.component';

describe('AgencijaPosaoDetaljnoComponent', () => {
  let component: AgencijaPosaoDetaljnoComponent;
  let fixture: ComponentFixture<AgencijaPosaoDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijaPosaoDetaljnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijaPosaoDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
