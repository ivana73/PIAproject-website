import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijeMojeComponent } from './agencije-moje.component';

describe('AgencijeMojeComponent', () => {
  let component: AgencijeMojeComponent;
  let fixture: ComponentFixture<AgencijeMojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijeMojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijeMojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
