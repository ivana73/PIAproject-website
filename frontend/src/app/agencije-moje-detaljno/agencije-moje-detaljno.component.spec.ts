import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencijeMojeDetaljnoComponent } from './agencije-moje-detaljno.component';

describe('AgencijeMojeDetaljnoComponent', () => {
  let component: AgencijeMojeDetaljnoComponent;
  let fixture: ComponentFixture<AgencijeMojeDetaljnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencijeMojeDetaljnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencijeMojeDetaljnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
