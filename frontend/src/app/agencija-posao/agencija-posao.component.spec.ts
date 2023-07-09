import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijaPosaoComponent } from './agencija-posao.component';

describe('AgencijaPosaoComponent', () => {
  let component: AgencijaPosaoComponent;
  let fixture: ComponentFixture<AgencijaPosaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijaPosaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijaPosaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
